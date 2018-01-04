import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Search from './Search'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelves: [
        { title: "Currently Reading", key: "currentlyReading" },
        { title: "Want to Read", key: "wantToRead" },
        { title: "Read", key: "read" },
        { title: "None", key: "none" }
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => <Search shelves={this.state.shelves}></Search>} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Bookshelf shelves={this.state.shelves}></Bookshelf>
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
