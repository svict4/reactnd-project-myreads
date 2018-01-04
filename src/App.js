import React from 'react'
import './App.css'
import { Link, Route } from 'react-router-dom'
import Search from './Search'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelves: [
        { title: "Currently Reading", key: "currentlyReading" },
        { title: "Want to Read", key: "wantToRead" },
        { title: "Read", key: "read" },
        { title: "None", key: "none" }
      ],
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => <Search books={this.state.books} shelves={this.state.shelves}></Search>} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {this.state.shelves.filter((shelf) => shelf.key !== "none").map((shelf) => (
              <Shelf
                key={shelf.key}
                shelf={shelf.key}
                title={shelf.title}
                books={this.state.books.filter(book => book.shelf === shelf.key)}
                shelves={this.state.shelves}>
              </Shelf>
            ))}
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
