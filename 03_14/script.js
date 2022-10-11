/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);
const bookOne = new Book(
  "The Fellowship of the Ring",
  "JRR Tolkien",
  "Fantasy",
  "January 20, 1910 12:00:00 EST"
);
const bookTwo = new Book(
  "The Two Towers",
  "JRR Tolkien",
  "Fantasy",
  "March 10, 1912 12:00:00 EST"
);
const bookThree = new Book(
  "The Return of the King",
  "JRR Tolkien",
  "Fantasy",
  "April 30, 1914 12:00:00 EST"
);
const bookFour = new Book(
  "12 Rules for Life",
  "Peterson",
  "Non-Fiction",
  "March 29, 2018 12:00:00 EST"
);
const bookFive = new Book(
  "The Unicorn Project",
  "Kim",
  "Fiction",
  "January 20, 2022 12:00:00 EST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log("Books:", bookOne, bookTwo, bookThree, bookFour, bookFive);
