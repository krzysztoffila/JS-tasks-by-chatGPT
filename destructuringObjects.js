import books from './books.js';
// 6
const [, secondBook] = books;
const {
  thirdParty: { goodreads },
} = secondBook;
// 7
function getTitleAndFormat({ title, format }) {
  return console.log(`Title: ${title}, Format: ${format}`);
}
// 8
const [firstBook] = books;
const {
  thirdParty: {
    goodreads: { rating: firstBookRating },
  },
} = firstBook;
// 9
function getBookTitleAndLang({ title, language }) {
  return console.log(`title: ${title}: lang: ${language}`);
}
// 10
// Tak samo jak 8
