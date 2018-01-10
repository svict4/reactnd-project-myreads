import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

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

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps = ({ books }) => {
    console.log("recieved books: ")
    console.log(books)
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value })

    if (event.target.value) {
      BooksAPI.search(event.target.value, 20).then((searchedBooks) => {
        //failed searches return an object instead of an array
        if (Array.isArray(searchedBooks)) {
          this.setState({
            searchedBooks: searchedBooks
          })
        } else {
          this.setState({searchedBooks: []})
        }
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
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search by title or author" />
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
  books: PropTypes.object.isRequired,
  allShelves: PropTypes.object.isRequired,
  shelfChange: PropTypes.func.isRequired
}

export default Search;