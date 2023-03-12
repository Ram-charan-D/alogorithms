export function frequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const fc1 = {};
  const fc2 = {};
  for (val of arr1) {
    fc1[val * val] = (fc1[val * val] || 0) + 1;
  }
  for (val of arr2) {
    fc2[val] = (fc2[val] || 0) + 1;
  }
  for (key in fc1) {
    if (!fc2[key]) return false;
    if (fc1[key] !== fc2[key]) return false;
    return true;
  }
}

export function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }
  return true;
}

export function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  let res = [];
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      res.push(arr[left]);
      res.push(arr[right]);
    }
    left += 1;
    right -= 1;
  }
  return res;
}

[1, 1, 2, 2, 3, 4];

export function countUniqueValues(arr) {
  const length = arr.length;
  let i = arr[0];
  let j = arr[1];

  if (length === 0) return 0;
  if (length === 1) return 1;
  if (length === 2 && arr[0] === arr[1]) return 2;
  if (length === 2 && arr[0] !== arr[1]) return 1;

  while (j < length) {
    if (arr[i] !== arr[j]) {
      arr[i] = i + 1;
      i = i + 1;
    }
    if (arr[i] === arr[j]) {
      j = j + 1;
    }
  }
  return arr[i];
}
