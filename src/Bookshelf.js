import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Bookshelf extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookshelves: [
        { title: "Currently Reading", key: "currentlyReading" },
        { title: "Want to Read", key: "wantToRead" },
        { title: "Read", key: "read" },
        { title: "None", key: "none" }
      ],
      books: []
    }
  }

  componentWillMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  render() {

    return (
      <div>
        {this.state.bookshelves.map((shelf) => (
          <div className="bookshelf" key={shelf.key}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  {this.state.books.filter(book => book.shelf === shelf.key).map((book) => (
                    <Book book={book} key={book.industryIdentifiers[1].identifier} bookshelves={this.state.bookshelves} shelf={shelf.key}></Book>
                  ))}
                </li>
              </ol>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Bookshelf;