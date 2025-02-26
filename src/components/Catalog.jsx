import { useEffect, useState } from "react";
import { apiUrl } from "../config";

export const Catalog = ({ user, checkUser }) => {
    const [listBooks, setBooks] = useState([]);
    const [currentBooks, setCurrentBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [currentGenre, setCurrentGenre] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const handleClick = async (book, action) => {
        checkUser();
        if (!user) {
            checkUser();
            return;
        }
        const data = {
            readerId: user.readerId,
            bookTitle: book.title,
            action: action
        };
        const response = await fetch(apiUrl + "/Book/loan", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const letter = await response.json();
        if (response.ok) {
            alert(letter.message || "Книга успешно забронирована!");
        } else {
            alert(letter.message || "Произошла ошибка при бронировании.");
        }
    };

    const handleChange = (value) => {
        setCurrentGenre(value); // Обновляем текущий жанр
        filter(); // Вызываем фильтрацию
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase(); // Получаем новый поисковый запрос
        setSearchQuery(query); // Обновляем состояние поиска
        filter(); // Вызываем фильтрацию
    };

    useEffect(() => {
        filter(); // Автоматическая фильтрация при изменении зависимостей
    }, [currentGenre, searchQuery]);

    const filter = () => {
        let filteredBooks = listBooks;

        // Фильтрация по жанру
        if (currentGenre !== "all") {
            filteredBooks = filteredBooks.filter((book) =>
                book.genres?.includes(currentGenre)
            );
        }

        // Фильтрация по поисковому запросу
        if (searchQuery) {
            filteredBooks = filteredBooks.filter((book) =>
                book.title.toLowerCase().includes(searchQuery)
            );
        }

        setCurrentBooks(filteredBooks); // Обновляем список отфильтрованных книг
    };

    useEffect(() => {
        const loadBooks = async () => {
            const response = await fetch(apiUrl + '/Book/all');
            if (response.ok) {
                const list = await response.json();
                setBooks(list);
                setCurrentBooks(list); // Установите текущие книги сразу после загрузки
            } else {
                alert(await response.statusText);
            }
        };
        loadBooks();
    }, []);

    useEffect(() => {
        const loadGenres = async () => {
            const response = await fetch(apiUrl + '/Book/genres');
            if (response.ok) {
                const list = await response.json();
                setGenres(list);
            } else {
                alert(await response.statusText);
            }
        };
        loadGenres();
    }, []);

    return (
        <div className="catalog-container">
            <div className="genres">
                <h3>Жанры</h3>
                <div className="card">
                    <ul class="list-group list-group-flush">
                        <li value="all" class="list-group-item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="genre"
                                onClick={() => handleChange("all")}
                            />
                            Все книги
                        </li>
                        {genres.map((item) => (
                            <li key={item} value={item} class="list-group-item">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="genre"
                                    onClick={() => handleChange(item)}
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="book-list">
                <div className="book-nav">
                    <h3>Каталог</h3>
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Введите ваш запрос"
                            aria-describedby="button-addon2"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <div className="list">
                    {currentBooks.map((book) => (
                        <div className="card book" key={book.inventoryNumber}>
                            <img className="card-img-top" src={book.imageUrl} alt={book.imageUrl} />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.publisher}</p>
                                <div className="buttons">
                                    <button className="btn btn-primary" onClick={() => handleClick(book, "reserve")}>Бронировать</button>
                                    <button className="btn btn-primary" onClick={() => handleClick(book, "like")}>В избранное</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};