import React, { Component } from 'react'
import Book from './Book'

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
                  shelves={this.props.shelves}
                  shelf={this.props.allBooks && this.props.allBooks.find(f => f.id === book.id)}
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

export default Shelf;