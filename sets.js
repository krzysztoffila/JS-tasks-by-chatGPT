'use strict';
import books from './books.js';
// 55
const keywordsSet = new Set();
books.forEach((book) => {
  book.keywords.forEach((keyword) => {
    keywordsSet.add(keyword);
  });
});
// 56
const keywordsPLetter = (setKeywords) => {
  const pLetterArr = [];
  for (const key of setKeywords) {
    if (key.charAt(0) === 'p') {
      pLetterArr.push(key);
    }
  }
  return pLetterArr;
};
// 57
const keywordsSet1 = new Set(books[0].keywords);
const keywordsSet2 = new Set(books[1].keywords);
const commonKeywords = [...keywordsSet1].filter((keyword) =>
  keywordsSet2.has(keyword)
);
// console.log('Wspólne słowa kluczowe:', commonKeywords);
// 58
const filterKeywordsByLength = (keywordsSet) => {
  const filteredKeywordsSet = new Set(
    [...keywordsSet].filter((keyword) => keyword.length > 7)
  );
  return filteredKeywordsSet;
};
