export const Home = ()=>{
    return (
        <div className="home-container">
            <div>
                <h2>Добро пожаловать в Уфимскую библиотеку!</h2>
                <p>Мы - кркупнейшая библиотека в Республике Башкортостан. Мы предлагаем широкий выбор литературы для всех возрастов и интересов. На сайте содержтся каталог всех книг, которые находятся у нас!</p>
                
                <p>Мы так же предлагаем возможность добавлять книги в избранное, бронировать и отслеживать историю читательского билета</p>
                
                <h3>Последние новости и события</h3>
                
                <p>Следите за нашими событиями, такими как книжные чтения, читательские мероприятия, встречи с авторами и многое другое!</p>
                
                <p>Здесь в будущем будут появляться новости библиотеки</p>
                <button className="btn btn-primary">Перейти к каталогу книг</button>
            </div>
            <div>
                <h3>Контактная информация</h3>
                <h3>Уфимская библиотека</h3>
                <p>Адрес: Уфа, ул. Комсомольская, д. 138</p>
                <p>Телефон: +7 000 000 00 00</p>
                <p>Email: biblioteka@mail.ru</p>
                <p>Разработчик: Артем Шарипов</p>
                <br />
                <h3>Часы работы</h3>
                <p>Понедельник - Пятница: 9:00 - 18:00</p>
                <p>Суббота: 10:00 - 16:00</p>
                <p>Воскресенье: выходной</p>
                <br />
                <h3>Социальные сети</h3>
                <a href="#">ВКонтакте</a>
                <a href="#">Ютуб</a>
                <a href="#">Телеграм</a>
            </div>
        </div>
    );
}