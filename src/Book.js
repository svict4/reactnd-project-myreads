import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ShelfChanger extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            selected: props.selected
        }        
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        this.setState({selected: event.target.value});
    }
    render() {
        return (
            <select value={this.state.selected} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
            {this.props.bookshelves.map(shelf => (
                <option value={shelf.key} key={shelf.key}>{shelf.title}</option>
            ))}        
            </select>
        )
    }
}

class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("{this.props.book.imageLinks.thumbnail}")' }}></div>
                    <div className="book-shelf-changer">
                        <ShelfChanger selected={this.props.book.shelf} bookshelves={this.props.bookshelves}></ShelfChanger>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}

export default Book;