import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: '',
      books: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value })
    if (event.target.value) {
      // setState isn't a promise, and it seems the search() function runs before the state is set
      // so I'm just using event.target.value
      BooksAPI.search(event.target.value).then((books) => this.setState({
        books: books
      }))
    }
  }

  componentDidMount() {
    console.log('didmount')
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Shelf books={this.state.books} shelves={this.props.shelves}></Shelf>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;