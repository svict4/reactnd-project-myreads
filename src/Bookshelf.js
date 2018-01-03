import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Bookshelf extends Component {
    componentWillMount() {
        // call API
    }

    render() {
        const bookshelves = [
          { title: "Currently Reading", key: "currentlyReading" },
          { title: "Want to Read", key: "wantToRead" }, 
          { title: "Read", key: "read" },
          { title: "None", key: "none"}
        ]

        const books = [
          {
              "title": "Learning Web Development with React and Bootstrap",
              "authors": [
                  "Harmeet Singh",
                  "Mehul Bhatt"
              ],
              "publishedDate": "2016-12-30",
              "description": "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
              "industryIdentifiers": [
                  {
                      "type": "ISBN_10",
                      "identifier": "1786462494"
                  },
                  {
                      "type": "ISBN_13",
                      "identifier": "9781786462497"
                  }
              ],
              "readingModes": {
                  "text": false,
                  "image": false
              },
              "pageCount": 278,
              "printType": "BOOK",
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "panelizationSummary": {
                  "containsEpubBubbles": false,
                  "containsImageBubbles": false
              },
              "imageLinks": {
                  "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                  "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
              "id": "sJf1vQAACAAJ",
              "shelf": "currentlyReading"
          },
          {
            "title": "The Cuckoo's Calling",
            "authors": [
              "Robert Galbraith"
            ],
            "publisher": "Mulholland Books",
            "publishedDate": "2013-04-30",
            "description": "A brilliant debut mystery in a classic vein: Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, and creditors are calling. He has also just broken up with his longtime girlfriend and is living in his office. Then John Bristow walks through his door with an amazing story: His sister, thelegendary supermodel Lula Landry, known to her friends as the Cuckoo, famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man. You may think you know detectives, but you've never met one quite like Strike. You may think you know about the wealthy and famous, but you've never seen them under an investigation like this. Introducing Cormoran Strike, this is the acclaimed first crime novel by J.K. Rowling, writing under the pseudonym Robert Galbraith.",
            "industryIdentifiers": [
              {
                "type": "ISBN_13",
                "identifier": "9780316206860"
              },
              {
                "type": "ISBN_10",
                "identifier": "0316206865"
              }
            ],
            "readingModes": {
              "text": true,
              "image": false
            },
            "pageCount": 464,
            "printType": "BOOK",
            "categories": [
              "Fiction"
            ],
            "averageRating": 3.5,
            "ratingsCount": 3037,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.21.20.0.preview.2",
            "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
            },
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=evuwdDLfAyYC&printsec=frontcover&dq=rowling&hl=&cd=4&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=evuwdDLfAyYC&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-evuwdDLfAyYC",
            "id": "evuwdDLfAyYC",
            "shelf": "wantToRead"
          }
      ]

        return (
          <div>
            {bookshelves.map((shelf) => (
              <div className="bookshelf" key={shelf.key}>
                  <h2 className="bookshelf-title">{shelf.title}</h2>
                  <div className="bookshelf-books">
                      <ol className="books-grid">
                          <li>
                            {books.filter(book => book.shelf === shelf.key).map((book) => (
                              <Book book={book} key={book.industryIdentifiers[1].identifier} bookshelves={bookshelves} shelf={shelf.key}></Book>
                            ))}
                          </li>
                      </ol>
                  </div>
              </div> 
            ))}
          </div>          
        );
    }
}

export default Bookshelf;