import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/**
* @description Represents a single shelf which is on a bookshelf (that can have multiple shelves)
*/
class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {this.props.books && this.props.books.map((book) => (
                <Book
                  book={book}
                  key={book.id}
                  allShelves={this.props.allShelves}
                  // checking that non-required prop exists
                  shelf={this.props.allBooks && this.props.allBooks.find(f => f.id === book.id) && this.props.allBooks.find(f => f.id === book.id).shelf}
                  shelfChange={this.props.shelfChange}>
                </Book>
              ))}
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array.isRequired,
  allShelves: PropTypes.array.isRequired,
  allBooks: PropTypes.array,
  shelf: PropTypes.string,
  shelfChange: PropTypes.func.isRequired
}

export default Shelf;