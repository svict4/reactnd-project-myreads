import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

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
    this.setState({searchString: event.target.value});
  }

  componentDidMount() {
    console.log('didmount')
    BooksAPI.search(this.state.searchString).then((books) => this.setState({
      books: books
    }))
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
            {this.state.books}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;