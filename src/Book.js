import React from 'react';


const Book = (props) => (
    props.books.map( (book,index) => {
        const image = book.imageLinks ? book.imageLinks.thumbnail : ' ' 
        console.log(book)
        return (
            <li key={index}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(evt) => {props.onShelfUpdate(evt.target.value,book)}} >
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors ? book.authors.map((author, index) => (
                  <div key={index} className="book-authors">{author}</div>  
                )) : ''}
            </div>
        </li>
        )
    })   
)

export default Book 

