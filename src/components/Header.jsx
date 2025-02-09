
export const Header = ({ changeRoute }) => {

    const handleClick = (route) => {
        changeRoute(route);
    }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Сайт Уфимской библиотеки</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <p class="nav-link active" onClick={() => handleClick("home")}>Главная</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" onClick={() => handleClick("catalog")}>Каталог</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" onClick={() => handleClick("my-books")}>Мои книги</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" onClick={() => handleClick("liked")}>Избранное</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" onClick={() => handleClick("history")}>История заказов</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" onClick={() => handleClick("profile")}>Профиль</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" onClick={() => handleClick("exit")}>Выход</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}