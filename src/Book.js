import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  render() {
    return (
      <select value={this.props.selected} onChange={(event) => this.props.shelfChange(this.props.bookId, event)}>
        <option value="none" disabled>Move to...</option>
        {this.props.shelves.map(shelf => (
          <option value={shelf.key} key={shelf.key}>{shelf.title}</option>
        ))}
      </select>
    )
  }
}

ShelfChanger.defaultProps = {
  selected: 'none'
}

// ShelfChanger.propTypes = {
//   onChange: PropTypes.func.isRequired
// }

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")" }}></div>
          <div className="book-shelf-changer">
            <ShelfChanger
              selected={this.props.shelf}
              shelves={this.props.shelves}
              bookId={this.props.book.id}
              shelfChange={this.props.shelfChange}>
            </ShelfChanger>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;