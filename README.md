# Zadania JavaScript na podstawie Tablicy Książek

## 1. Destructuring Arrays:
1. Zdekstrukturyzuj tablicę autorów drugiej książki.
2. Stwórz funkcję, która przyjmuje trzecią książkę i wykorzystuje destrukturyzację do wydobycia liczby stron.
3. Utwórz nową tablicę, używając destrukturyzacji do wydobycia tytułów trzech pierwszych książek.
4. Zdekstrukturyzuj tablicę słów kluczowych drugiej książki i przypisz pierwsze słowo do zmiennej `firstKeyword`.
5. Napisz funkcję, która przyjmuje tablicę książek i zwraca średnią ilość stron.

## 2. Destructuring Objects:
6. Zdekstrukturyzuj obiekt `goodreads` z drugiej książki, aby uzyskać liczbę recenzji.
7. Utwórz funkcję, która przyjmuje trzecią książkę i wykorzystuje destrukturyzację, aby uzyskać tytuł i format.
8. Zdekstrukturyzuj obiekt `thirdParty` z pierwszej książki, aby uzyskać ocenę z Goodreads.
9. Utwórz funkcję, która przyjmuje obiekt książki i wykorzystuje destrukturyzację, aby uzyskać tytuł i język.
10. Zdekstrukturyzuj obiekt `thirdParty.goodreads` z pierwszej książki, aby uzyskać ocenę.

## 3. The Spread Operator:
11. Utwórz nową tablicę, łącząc tytuły trzech pierwszych książek za pomocą operatora spread.
12. Dodaj nową książkę do tablicy `books` za pomocą spread operator.
13. Utwórz kopię tablicy słów kluczowych drugiej książki, dodając do niej nowe słowo.
14. Utwórz nową tablicę, zawierającą tytuły i autorów wszystkich książek, używając operatora spread.
15. Dodaj do istniejącej tablicy książek kolejne trzy książki za pomocą spread operator.

## 4. Rest Pattern and Parameters:
16. Utwórz funkcję, która przyjmuje dowolną liczbę argumentów i zbiera je za pomocą rest parameter.
17. Zastosuj rest pattern, aby stworzyć nowy obiekt z części informacji o pierwszej książce.
18. Stwórz funkcję, która przyjmuje tablicę i dowolną liczbę dodatkowych argumentów, a następnie zwraca nową tablicę z wszystkimi elementami.
19. Utwórz funkcję, która przyjmuje książkę jako obiekt i wykorzystuje rest parameter do wydobycia informacji o autorach.
20. Zastosuj rest pattern, aby utworzyć nowy obiekt zawierający informacje o drugiej książce bez pola `onlineContent`.

## 5. Short Circuiting (&& and ||):
21. Stwórz warunkową instrukcję, która zwraca tytuł pierwszej książki, jeśli istnieje, w przeciwnym razie zwraca "Brak tytułu".
22. Utwórz funkcję, która używa operatora `||` do zwracania domyślnego języka dla książki, jeśli nie jest zdefiniowany.
23. Zastosuj operator `&&` do sprawdzenia, czy druga książka ma onlineContent, i wypisz odpowiedni komunikat.
24. Stwórz funkcję, która używa operatora `||` do ustawiania domyślnej wartości dla pola pages w przypadku braku danych.
25. Utwórz warunkową instrukcję, która używa operatora `&&` do zwracania pierwszego słowa kluczowego drugiej książki, jeśli istnieje.

## 6. The Nullish Coalescing Operator (??):
26. Utwórz wyrażenie, które zwraca liczbę recenzji z Goodreads pierwszej książki, ale jeśli nie istnieje, to zwraca 0.
27. Zastosuj operator `??` do uzyskania wartości rocznika książki, ale ustaw 2022 jako domyślną wartość, jeśli pole nie istnieje.
28. Utwórz funkcję, która przyjmuje liczbę stron i używa operatora `??` do ustawienia domyślnej wartości 0, jeśli nie jest zdefiniowana.
29. Zastosuj operator `??` do uzyskania tytułu drugiej książki, ale ustaw "Brak tytułu" jako domyślną wartość, jeśli pole nie istnieje.
30. Utwórz warunkową instrukcję, która używa operatora `??` do zwracania pierwszego słowa kluczowego drugiej książki, ale tylko jeśli istnieje.

## 7. Logical Assignments Operators:
31. Wykorzystaj operator `||=` do nadpisania wartości tytułu pierwszej książki, jeśli jest ona falsy.
32. Utwórz funkcję, która używa operatora `&&=` do dodania nowego słowa kluczowego do drugiej książki, ale tylko jeśli istnieje.
33. Stwórz warunkową instrukcję, która używa operatora `??=` do ustawienia pola format dla trzeciej książki, ale tylko jeśli nie istnieje.
34. Wykorzystaj operator `||=` do dodania nowej książki do tablicy `books`, ale tylko jeśli ta książka nie istnieje w tablicy.
35. Utwórz funkcję, która używa operatora `??=` do ustawienia domyślnej wartości dla oceny Goodreads trzeciej książki, ale tylko jeśli pole nie istnieje.

## 8. Looping Arrays: The for-of Loop:
36. Wykorzystaj pętlę `for-of` do wyświetlenia wszystkich autorów trzeciej książki.
37. Utwórz funkcję, która przyjmuje tablicę książek i używa pętli `for-of` do wyświetlenia tytułów i autorów.
38. Zastosuj pętlę `for-of` do sumowania liczby stron wszystkich książek.
39. Utwórz funkcję, która przyjmuje tablicę książek i używa pętli `for-of` do wyszukania książki z najwyższą oceną Goodreads.
40. Wykorzystaj pętlę `for-of` do wyświetlenia indeksów i tytułów wszystkich książek.

## 9. Enhanced Object Literals:
41. Stwórz nową książkę, używając skróconej składni obiektu, ale dodaj do niej nowe pole.
42. Utwórz funkcję, która przyjmuje tytuł i autora, a następnie zwraca obiekt reprezentujący nową książkę, korzystając z enhanced object literals.
43. Stwórz obiekt reprezentujący nową książkę, używając computed property names do dynamicznego dodania pola.
44. Utwórz funkcję, która przyjmuje rok i język, a następnie zwraca obiekt reprezentujący nową książkę z ustawionymi polami.
45. Stwórz obiekt reprezentujący nową książkę, używając skróconej składni obiektu do przypisania wartości polom.

## 10. Optional Chaining (?.):
46. Użyj optional chaining, aby bezpiecznie uzyskać ocenę książki na Goodreads, nawet jeśli obiekt `goodreads` nie istnieje.
47. Zastosuj optional chaining do uzyskania daty publikacji trzeciej książki, ale zwróć "Brak daty" w przypadku braku danych.
48. Utwórz funkcję, która używa optional chaining do wydobycia drugiego autora trzeciej książki, ale zwróć "Brak informacji" w przypadku braku danych.
49. Zastosuj optional chaining do uzyskania liczby recenzji z Goodreads drugiej książki, ale zwróć 0, jeśli pole nie istnieje.
50. Utwórz funkcję, która przyjmuje obiekt książki i używa optional chaining do bezpiecznego uzyskania informacji o onlineContent.

## 11. Looping Objects: Object Keys, Values and Entries:
51. Użyj `Object.keys` do uzyskania tablicy kluczy pierwszej książki i wyświetlenia ich.
52. Stwórz funkcję, która przyjmuje obiekt książki i używa `Object.values` do wyświetlenia wszystkich wartości.
53. Zastosuj `Object.entries` do uzyskania tablicy par klucz-wartość drugiej książki i wyświetlenia ich.
54. Utwórz funkcję, która przyjmuje obiekt książki i używa `Object.keys` do sprawdzenia, czy zawiera pole "edition".

## 12. Sets:
55. Utwórz set `keywordsSet`, używając danych ze wszystkich książek, aby uzyskać unikalne słowa kluczowe.
56. Stwórz funkcję, która przyjmuje set `keywordsSet` i zwraca tablicę zawierającą tylko słowa kluczowe zaczynające się na literę "p".
57. Użyj setów do porównania słów kluczowych dwóch różnych książek i wyświetlenia wspólnych.
58. Utwórz funkcję, która przyjmuje set `keywordsSet` i zwraca set, który zawiera tylko słowa kluczowe dłuższe niż 7 znaków.

## 13. Maps: Fundamentals:
59. Utwórz mapę `authorsMap`, gdzie kluczem będzie indeks książki, a wartością autor pierwszej książki.
60. Stwórz funkcję, która przyjmuje mapę `authorsMap` i zwraca tablicę zawierającą wszystkich autorów.

## 14. Maps: Iteration:
61. Utwórz funkcję, która przyjmuje mapę `authorsMap` i używa `for...of` do wyświetlenia par klucz-wartość.
62. Użyj `forEach` na mapie `authorsMap`, aby wyświetlić indeksy i autorów książek.
63. Stwórz nową mapę `ratingsMap`, gdzie kluczem będzie tytuł książki, a wartością ocena z Goodreads.
64. Użyj `for...of` na mapie `ratingsMap`, aby zsumować wszystkie oceny.
