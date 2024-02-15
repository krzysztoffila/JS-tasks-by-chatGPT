'use strict';
import books from './books.js';
// 26
let {
  thirdParty: {
    goodreads: { ratingsCount },
  },
} = books[2];
ratingsCount ??= 0;
// 27
books[3].year ??= 2022;
// 28
function getBookPages(book) {
  return (book.pages ??= 0);
}
// 29
books[2].title ??= 'Title unknown';
// 30
books[2].keywords?.[0] ?? 'No keywords';
