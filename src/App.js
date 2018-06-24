import React from 'react'
import { Route } from 'react-router-dom'
import Books  from './Books'
import Search  from './Search'
import  * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  onShelfUpdate = (shelf,book) => {
    BooksAPI.update(book,shelf)
    this.setState((currentState) => ({
       books: currentState.books.map(b => {
        if (b.id === book.id){
          book.shelf = shelf 
        }
        return b;
       })
     })) 
  }


  componentDidMount() {
    /*Get all books from BooksAPI  */
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState(() => ({
          books: allBooks
        }))
      })
  }

  render() {
    /*Give an URL for each component  */
    return (
      <div className="app">
        <Route exact path='/' render = {() => (
          <Books
            booksList= {this.state.books}
            onShelfUpdate={this.onShelfUpdate}
          />
        )}/>

        <Route exact path='/search' render = {() => (
          <Search/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
