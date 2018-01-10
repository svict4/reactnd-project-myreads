import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @description Represents the dropdown options on a Book class
* @constructor
*/
class ShelfChanger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected
    }
  }

  render() {
    return (
      <select value={this.state.selected} onChange={(event) => this.props.shelfChange(this.props.bookId, event)}>
        <option value="none" disabled>Move to...</option>
        {/* dynamically list all of the shelves */}
        {this.props.allShelves.map(shelf => (
          <option value={shelf.key} key={shelf.key}>{shelf.title}</option>
        ))}
      </select>
    )
  }
}

ShelfChanger.defaultProps = {
  selected: "none"
}

ShelfChanger.propTypes = {
  onChange: PropTypes.func,
  selected: PropTypes.string,
  allShelves: PropTypes.array.isRequired
}

/**
* @description Represents a single book
*/
class Book extends Component {
  render() {
    const { shelf, allShelves, book, shelfChange } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")" }}></div>
          <div className="book-shelf-changer">
            <ShelfChanger
              selected={shelf}
              allShelves={allShelves}
              bookId={book.id}
              shelfChange={shelfChange}>
            </ShelfChanger>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(' ,')}</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  allShelves: PropTypes.array.isRequired,
  shelf: PropTypes.string,
  shelfChange: PropTypes.func.isRequired
}

export default Book;