'use strict';
import books from './books.js';
// 21
books[0].title || console.log('No title');
// 22
function bookLanguage(book) {
  return (book.language ||= 'english');
}
