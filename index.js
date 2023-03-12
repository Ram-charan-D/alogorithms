import {
  frequencyCounter,
  anagram,
  sumZero,
  countUniqueValues,
} from './algorithms.js';

const appDiv = document.getElementById('root');
appDiv.innerHTML = `<h1>Basic Algorithms</h1>`;

// console.log(frequencyCounter([1, 1, 2, 3], [9, 1, 1, 4]));

// console.log(anagram('anagram', 'nagaram'));
// console.log(anagram('qwerty', 'qeywrt'));
// console.log(anagram('', ''));
// console.log(anagram('awesome', 'awesom'));

// console.log(sumZero([-3, -2, 0, 1, 2, 3]));

console.log(countUniqueValues([1, 1, 2, 2, 3, 4]));
