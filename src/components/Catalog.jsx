import { useEffect, useState } from "react";
import { apiUrl } from "../config";

export const Catalog = ({ user }) => {

    const [listBooks, setBooks] = useState([]);
    const handleBron = async (book) => {
        const data = {
            readerId: user.readerId,
            bookTitle: book.title,
            action: "reserve"
        }

        const response = await fetch(apiUrl + "/Book/loan", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const letter = await response.json();
        alert(letter.message);
    }
    useEffect(() => {
        const temp = async () => {
            const response = await fetch(apiUrl + '/Book/all');
            if (response.ok) {
                const list = await response.json()
                setBooks(list);
            }
            else {
                alert(await response.statusText);
            }
        }
        temp();
    }, []);
    return (
        <div className="catalog-container">
            <div className="genres">
                <h3>Жанры</h3>
                <div className="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>
                        <li class="list-group-item"><input className="form-check-input" type="radio" name="genre" /> Все книги</li>


                    </ul>
                </div>
            </div>
            <div className="book-list">
                <div className="book-nav">
                    <h3>Каталог</h3>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Введите ваш запрос" aria-describedby="button-addon2" />
                        <button class="btn btn-primary" type="button" id="button-addon2">Найти</button>
                    </div>
                </div>

                <div className="list">
                    {listBooks.map((book, index) => {
                        return (
                            <div className="card book" key={index}>
                                <img className="card-img-top" src={book.imageUrl} alt={book.imageUrl} />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.publisher}</p>
                                    <div className="buttons">
                                        <button className="btn btn-primary" onClick={() => handleBron(book)}>Бронировать</button>
                                        <button className="btn btn-primary">В избранное</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}