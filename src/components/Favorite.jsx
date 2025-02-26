import { useState, useEffect } from 'react';
import { apiUrl } from '../config';
import '../style.css';
const Favorite = ({ user, checkUser }) => {
    const [favoriteBooks, setBooks] = useState([]);
    const temp = async () => {
        const response = await fetch(apiUrl + '/Book/get/' + user.ticketNumber);
        if (response.ok) {
            const data = await response.json()
            setBooks(data.favoriteBooks);
        }
        else {
            alert(await response.statusText);
        }
    }
    useEffect(() => {
        if (!user) {
            checkUser();
        }
        else {
            temp();
        }
    }, [user]);
    return (
        <div className="list">
            {
                favoriteBooks.map((book, index) => (
                    <div className="card book" key={index}>
                        <img className="card-img-top" src={book.imageUrl} alt={book.imageUrl} />
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">{book.publisher}</p>
                            <p className="card-text">Статус: В избранном</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Favorite