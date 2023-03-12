// Import stylesheets
import './style.css';
import {
  frequencyCounter,
  anagram,
  sumZero,
  countUniqueValues,
} from './algorithms.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// console.log(frequencyCounter([1, 1, 2, 3], [9, 1, 1, 4]));

// console.log(anagram('anagram', 'nagaram'));
// console.log(anagram('qwerty', 'qeywrt'));
// console.log(anagram('', ''));
// console.log(anagram('awesome', 'awesom'));

// console.log(sumZero([-3, -2, 0, 1, 2, 3]));

console.log(countUniqueValues([1, 1, 2, 2, 3, 4]));
