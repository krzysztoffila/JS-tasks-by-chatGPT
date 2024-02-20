'use strict';
import books from './books.js';
// 46
const [firstBook, secondBook, thirdBook] = books;
firstBook.thirdParty?.goodreads;
// 47
const data = thirdBook?.publicationDate || 'No data';
// 48
const getSecondAuthor = (book) => book?.author[1] || 'No second author';
// 49
secondBook?.thirdParty?.goodreads?.ratingsCount || 0;
// 50
const getOnlineContent = (book) =>
  book?.onlineContent || 'No providing online content';
