'use strict';
import books from './books.js';
// 16
const restArgs = (...args) => console.log(...args);
// 17
const { title, author, publisher, ...restOfBook } = books[0];
const partialBookInfo = { title, author, publisher };
// 18
function allElements(arr, ...args) {
  const allElems = [...arr, ...args];
  return allElems;
}
// 19
function getAuthors(book) {
  console.log(...book.author);
}
// 20
const { onlineContent, ...secondBookWithoutOnlineContent } = books[1];
