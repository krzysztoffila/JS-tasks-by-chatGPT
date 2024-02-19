'use strict';
import books from './books.js';
// 41
// const createNewBook = (title, author, newField, fieldValue) => {
//   const newBook = {
//     title,
//     author,
//   };
//   newBook[newField] = fieldValue;

//   return newBook;
// };
// const newBook = createNewBook(
//   'New Book Title',
//   ['New Author'],
//   'newField',
//   'New Field Value'
// );
// console.log('Nowa książka:', newBook);
// 42
// const createNewBook = (title, author) => ({
//   title,
//   author,
// });
// const newBook = createNewBook('New Book Title', ['New Author']);
// console.log('Nowa książka:', newBook);
// 43
// const createNewBook = (title, author, dynamicField, dynamicValue) => {
//   // Utwórz nowy obiekt książki, używając computed property names do dynamicznego dodania pola.
//   const newBook = {
//     title,
//     author,
//     // ... (inne pola książki)
//     [dynamicField]: dynamicValue,
//   };
//   return newBook;
// };
// // Przykład użycia funkcji do utworzenia nowej książki z dynamicznym polem.
// const dynamicField = 'newField';
// const dynamicValue = 'Dynamic Field Value';
// const newBook = createNewBook('New Book Title', ['New Author'], dynamicField, dynamicValue);
// console.log('Nowa książka z dynamicznym polem:', newBook);
// 44
// const createNewBook = (title, author, year, lang) => {
//   // Utwórz nowy obiekt książki, używając computed property names do dynamicznego dodania pola.
//   const newBook = {
//     title,
//     author,
//     year,
//     lang,
//   };
//   return newBook;
// };
// const newBook = createNewBook('tytul', 'autor', 1996, 'pl');
// 45
// const dynamicField = 'newField';
// const dynamicValue = 'Dynamic Field Value';
// const newBook = createNewBook('New Book Title', ['New Author'], dynamicField, dynamicValue);

// console.log('Nowa książka z dynamicznym polem:', newBook);
