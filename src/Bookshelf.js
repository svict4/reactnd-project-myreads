import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class Bookshelf extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
      <div>
        {this.props.shelves.map((shelf) => (
          <Shelf
            key={shelf.key}
            shelf={shelf.key}
            title={shelf.title}
            books={this.state.books.filter(book => book.shelf === shelf.key)}
            shelves={this.props.shelves}>
          </Shelf>
        ))}
      </div>
    );
  }
}

export default Bookshelf;