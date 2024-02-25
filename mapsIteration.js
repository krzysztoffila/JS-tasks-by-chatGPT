'use strict';
import books from './books.js';
import authorsMap from './mapsFundamentals.js';

// 61 Utwórz funkcję, która przyjmuje mapę authorsMap i używa for...of do wyświetlenia par klucz-wartość.
const displayAuthorsMap = (authorsMap) => {
  for (const [index, author] of authorsMap) {
    console.log(`Index: ${index}, Author: ${author}`);
  }
};
// 62 Użyj forEach na mapie authorsMap, aby wyświetlić indeksy i autorów książek.
const displayAuthorsMapWithForEach = (authorsMap) => {
  authorsMap.forEach((author, index) => {
    console.log(`Index: ${index}, Author: ${author}`);
  });
};

// 63 Stwórz nową mapę ratingsMap, gdzie kluczem będzie tytuł książki, a wartością ocena z Goodreads.
const createRatingsMap = (books) => {
  const ratingsMap = new Map();

  books.forEach((book) => {
    const title = book.title;
    const rating = book.thirdParty?.goodreads?.rating || 0;

    ratingsMap.set(title, rating);
  });

  return ratingsMap;
};
// 64 Użyj for...of na mapie ratingsMap, aby zsumować wszystkie oceny.
const sumAllRatings = (ratingsMap) => {
  let totalRating = 0;

  for (const rating of ratingsMap.values()) {
    totalRating += rating;
  }

  return totalRating;
};

// Wywołanie funkcji
const ratingsMap = createRatingsMap(books);
displayAuthorsMap(authorsMap);
displayAuthorsMapWithForEach(authorsMap);
console.log('Mapa ocen z Goodreads:', ratingsMap);
const totalRating = sumAllRatings(ratingsMap);
console.log('Suma wszystkich ocen:', totalRating);
