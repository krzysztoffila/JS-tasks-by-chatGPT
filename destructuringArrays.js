'use strict';
import books from './books.js';
// 1.
const [...secondBookAuthors] = books[1].author;
const [firstAuthor, secondAuthor, thirdAuthor] = secondBookAuthors;
// 2.
function getNumberOfPages({ pages }) {
  return pages;
}
// 3.
const [firstTitle, secondTitle, thirdTitle] = books.map((book) => book.title);
const titlesArray = [firstTitle, secondTitle, thirdTitle];
// 4.
const [
  ,
  ,
  {
    keywords: [firstKeyword, ...restKeywords],
  },
] = books;
// 5
function averagePages(books) {
  if (books.length === 0) {
    return 0;
  }
  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  const average = totalPages / books.length;
  return average;
}
const avgPages = averagePages(books);
console.log(`Średnia ilość stron: ${avgPages}`);
