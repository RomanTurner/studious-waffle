function range(start, end, step = 1) {
  let rangeArray = [];

  if (step < 0) {
    for (let i = start; i >= end; i += step) rangeArray.push(i);
  } else {
    for (let i = start; i <= end; i += step) rangeArray.push(i);
  }
  return rangeArray;
}

function sum(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}

function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

var reverseArrayInPlace = function (array) {
  var arrLength = array.length;
  for (i = 0; i < arrLength; i++) {
    array.splice(i, 0, array.pop());
  }
};

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    debugger;
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let newArray = [];
  for (node = list; node; node = node.rest) {
    newArray.push(node.value);
  }
  return newArray;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

let list = { value: 10, rest: { value: 20, rest: null } };
console.log(listToArray(list));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(prepend(10, prepend(20, null)));
console.log(listToArray(arrayToList([10, 20, 30])));

function letsConnect(yes) {
  if (yes === true) {
    console.log("linkedIn");
    console.log("Twitter");
  } else {
    console.log("thanks for reading!");
  }
}

const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);



const menu = [
  "Jalapeno Poppers",
  "Cheeseburger",
  "Fish and Chips",
  "French Fries",
  "Onion Rings",
];

const newMenu = [...menu.slice(0, 1), 'Veggie Burger', 'House Salad', 'Teriyaki Tofu', ...menu.slice(3)];
console.log(menu);
console.log(newMenu);
