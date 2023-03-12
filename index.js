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
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// 4 2 13 0 1
