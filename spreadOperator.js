'use strict';
import books from './books.js';
// 11 ???
const titlesArray = [...books[0].title, ...books[1].title, ...books[2].title];
// 12
const newBook = [
  ...books,
  {
    title: 'New Book Title',
    author: ['New Author'],
    pages: 500,
    year: 2022,
  },
];
// 13
const addedKeyword = [...books[1].keywords, 'Added Keyword'];
// 14
const titlesAndAuthorsArray = [
  ...books.map(({ title, author }) => ({ title, author })),
];
// 15
const newBooks = [
  {
    title: 'New Book 1',
    author: ['Author 1'],
  },
  {
    title: 'New Book 2',
    author: ['Author 2'],
  },
  {
    title: 'New Book 3',
    author: ['Author 3'],
  },
];
const updatedBooks = [...books, ...newBooks];
