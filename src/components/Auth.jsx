import { useRef, useState } from "react";
import { apiUrl } from "../config";
export const Auth = ({ changeUser }) => {
    const login = useRef(null);
    const pass = useRef(null);
    const handleClick = async () => {

        const response = await fetch(apiUrl + `/User/sign-in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ TicketNumber: login.current.value, Password: pass.current.value }),
        });
        if (response.ok) {
            const userData = await response.json();
            changeUser(userData);
            return true;
        } else {
            const data = await response.json();
            alert(data.message || "Ошибка входа");
            return false;
        }

    }
    return (
        <div className="body">
            <div className="card" align="center" style={{ width: "max-content" }}>
                <div className="card-header">
                    <h2>Сайт Уфимской библиотеки</h2>
                </div>
                <div className="card-body ">
                    <h1 className="card-title">Авторизация</h1>
                    <br />
                    <input type="text" ref={login} className="form-control" placeholder="Номер читательского билета" />
                    <br />
                    <input type="text" ref={pass} className="form-control" placeholder="Пароль" />
                    <br />
                    <button className="btn btn-primary" onClick={async () => { await handleClick() }}>Войти</button>
                </div>
            </div>
        </div>
    );
}