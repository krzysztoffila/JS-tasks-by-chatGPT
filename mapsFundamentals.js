'use strict';
import books from './books.js';
// 59
const authorsMap = new Map();
books.forEach((book, index) => {
  authorsMap.set(index, book.author[0]);
});
console.log(authorsMap);
// 60
const getAllAuthors = (authorsMap) => {
  const allAuthors = [...authorsMap.values()];
  return allAuthors;
};
// console.log(getAllAuthors(authorsMap));

export default authorsMap;
