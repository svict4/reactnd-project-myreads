import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import debounce from 'lodash/debounce'

/**
* @description Defines the Search route/page
* @constructor
*/
class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: "",
      searchedBooks: []
    }
    
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
    this.handleChange = debounce(this.handleChange.bind(this), 300)
  }

  handleChangeWrapper(event) {
    let searchEvent = event.target.value
    this.setState({ searchString: searchEvent })
    this.handleChange(searchEvent)
  }

  handleChange(searchEvent) {
    let searchedBooks = []
    if (searchEvent) {
      BooksAPI.search(searchEvent, 20).then((searchReturn) => {
        //failed searches return an object instead of an array
        if (Array.isArray(searchReturn)) {
          searchedBooks = searchReturn
        } 
        this.setState({searchedBooks})
      })
    } else {
      this.setState({searchedBooks: []})
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" value={this.state.searchString} onChange={this.handleChangeWrapper} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Shelf
              books={this.state.searchedBooks}
              allBooks={this.props.books}
              allShelves={this.props.allShelves}
              shelfChange={this.props.shelfChange}>
            </Shelf>
          </ol>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  allShelves: PropTypes.array.isRequired,
  shelfChange: PropTypes.func.isRequired
}

export default Search;