export const Catalog = ()=>{
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
            </div>
        </div>
    );
}