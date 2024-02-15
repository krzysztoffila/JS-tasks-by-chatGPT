'use strict';
import books from './books.js';
// 21
books[0].title || console.log('No title');
// 22
function bookLanguage(book) {
  return (book.language ||= 'english');
}
// 23
books[1].onlineContent && console.log(`Second book provided online content`);
// 24
function howManyPages(book) {
  return (book.pages ||= 'unknown');
}
// 25
const [, secondBook] = books;
secondBook.keywords && console.log(secondBook.keywords[0]);
