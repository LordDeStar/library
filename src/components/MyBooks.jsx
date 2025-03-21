import { useState, useEffect } from "react";
import { apiUrl } from "../config";
export const MyBooks = ({ user, checkUser }) => {
    const [reservedBooks, setBooks] = useState([]);
    const [onHands, setOnHands] = useState([]);
    const temp = async () => {
        console.log(user)
        const response = await fetch(apiUrl + '/Book/get/' + user.ticketNumber);
        if (response.ok) {
            const data = await response.json()
            setBooks(data.reservedBooks);
            setOnHands(data.takenBooks);
        }
        else {
            alert(await response.statusText);
        }
    }
    useEffect(() => {
        if (!user) {
            checkUser();
            return;
        }
        temp();
    }, []);
    return (
        <>
            <div className="list" style={{ height: "fit-content" }}>
                {reservedBooks.map((book, index) => {
                    return (
                        <div className="card book" key={index}>
                            <img className="card-img-top" src={book.imageUrl} alt={book.imageUrl} />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.publisher}</p>
                                <p className="card-text">Статус: забронирвоанно</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <br />
            <hr />
            <br />
            <div className="list">
                {onHands.map((book, index) => {
                    return (
                        <div className="card book" key={index}>
                            <img className="card-img-top" src={book.imageUrl} alt={book.imageUrl} />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.publisher}</p>
                                <p className="card-text">Статус: на руках</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}