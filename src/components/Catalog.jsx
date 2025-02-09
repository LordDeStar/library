import { useEffect, useState } from "react";

export const Catalog = ()=>{

    const [listBooks, setBooks] = useState([]);
    useEffect(()=>{
        setBooks([
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
            {
                title: "test",
                author: "Testov Test Testovich",
                image: "https://avatars.mds.yandex.net/get-mpic/4415357/2a0000018a6a404be70d5a198ae5e1bed9d7/orig"
            },
        ])
    }, [])
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
                        <input type="text" class="form-control" placeholder="Введите ваш запрос" aria-describedby="button-addon2"/>
                        <button class="btn btn-primary" type="button" id="button-addon2">Найти</button>
                    </div>
                </div>

                <div className="list">
                    {listBooks.map(book=>{
                        return (
                            <div className="card book">
                                <img className="card-img-top" src={book.image} alt={book.image} />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.author}</p>
                                    <div className="buttons">
                                        <button className="btn btn-primary">Бронировать</button>
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