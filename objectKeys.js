'use strict';
import books from './books.js';
// 51
const [firstBook] = books;
for (const key in firstBook) {
  // console.log(key);
}
// 52
const showValuesOfBook = (book) => console.log(Object.values(book));
// 53
for (const [key, value] of Object.entries(books[2])) {
  // console.log(`Klucz: ${key}, Wartość: ${value}`);
}
// 54
const hasEditionField = (book) => {
  const keys = Object.keys(book);
  return keys.includes('edition');
};
