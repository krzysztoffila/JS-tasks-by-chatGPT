'use strict';
import books from './books.js';
// 36
for (let author of books[2].author) {
  // console.log(author);
}
// 37
const displayTitlesAndAuthors = (books) => {
  for (const book of books) {
    console.log(`Tytuł: ${book.title}, Autorzy: ${book.author}`);
  }
};
// 38
let totalPages = 0;
for (const { pages } of books) {
  totalPages += pages;
}
// 39
const findBookWithHighestRating = (books) => {
  let highestRating = -1;
  let highestRatedBook = null;
  for (const book of books) {
    const goodreadsRating = book.thirdParty?.goodreads?.rating || 0;
    if (goodreadsRating > highestRating) {
      highestRating = goodreadsRating;
      highestRatedBook = book;
    }
  }
  return highestRatedBook;
};
const highestRatedBook = findBookWithHighestRating(books);
console.log('Książka z najwyższą oceną Goodreads:', highestRatedBook);
// 40
for (const [index, { title }] of Object.entries(books)) {
  console.log(index, ':', title);
}
