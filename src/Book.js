import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'


class ShelfChanger extends Component {
  render() {
    return (
      <select value={this.props.selected} onChange={this.props.handleChange}>
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

ShelfChanger.propTypes = {
  onChange: PropTypes.func.isRequired
}

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selected: event.target.value });
    BooksAPI.update({id: this.props.id}, event.target.value).then((response) => {
      console.log(response)
    })
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")" }}></div>
          <div className="book-shelf-changer">
            <ShelfChanger
              selected={this.props.book.shelf}
              shelves={this.props.shelves}
              id={this.props.book.id}
              onChange={this.handleChange()}>
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