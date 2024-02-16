'use strict';
import books from './books.js';
// 31
books[0].title ||= 'No title available';
// 32
const addKeywordToBook = (book, newKeyword) => {
  book.keywords &&= [...book.keywords, newKeyword];
  console.log('New array of book keywords:', book.keywords);
};
// 33
books[0].format ??= 'hardcover';
// 34
const addBookToLibrary = (library, newBook) => {
  library.some((book) => book.title === newBook.title) || library.push(newBook);
};
// 35
const setDefaultGoodreadsRating = (book) => {
  book.thirdParty?.goodreads?.rating ??= 5.0;
  console.log('Goodreads rating of the book:', book.thirdParty?.goodreads?.rating);
};
