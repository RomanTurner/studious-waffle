/* 
TODO PRACTICE WITH ARRAY METHODS
*
*/

//todo: copyWithin()
//The method copies array elements to another
//position in the array, overwriting the existing values.
//!Will not add more items to array
//?This method DOES overwrite the original array.

var fruits = ["banana", "orange", "apple", "mango"];

//*Syntax array.copyWithin(target, start, end)
console.log(fruits.copyWithin(2, 0));

//todo: entries()
/* 
For each item in the original array, the new iteration object will contain
an array with the index as the key, and the item value as the value:
[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]
*/
//?This method does NOT change the original array.

var fruits2 = ["banana", "orange", "apple", "mango"];
//*Syntax array.entries()
console.log(fruits2.entries());

//todo: every()
//*The every() method checks if all elements in an array pass a test (provided as a function).
/* 
The method executes the function once for each element present in the array:
*If it finds an array element where the function returns a false value, every() returns false and returns false (and doesn't check the remaining values)
*If no false occur, every() returns true. 
! This is the && of Array methods, all elements have to pass the test. 
!Does not execute the function for array elements without values. 
?This method does NOT change the original array
Return Value: A Boolean. Returns true if all the elements in the array pass the test,
otherwise it returns false
*/

var fruits3 = ["banana", "orange", "apple", "mango"];
//*Syntax array.every(function(currentValue, index, arr), thisValue)

let sampleArray = [1, 2, 3];
let isGreaterThanZero = (number) => number > 0;

let allPositive = sampleArray.every((num) => isGreaterThanZero(num));
console.log(allPositive);

let isAFruitAString = fruits3.every((fruit) => typeof fruit === String);
console.log(isAFruitAString);

fruits.forEach((element) => console.log(typeof element));

function isAString(element, index, arr) {
  for (element in arr) {
    typeof element === String;
    return true;
  }
}

console.log(fruits3.every(isAString));

//!PRACTICE USING SIGNATURE: nameOfFunction(typeOfA: A, TypeofB: B): expected return
//todo: fill()
/* 
The fill() method fills the specified elements in an array with a static value.
You can specify the position of where to start and end the filling. 
If not specified, all elements will be filled.
*/
//? Note: this method overwrites the original array.

//*Syntax: array.fill(value, start, end);

let fruits4 = ["banana", "orange", "apple", "mango"];

let fillExample = fruits4.fill("Figgy-Pudding", 0);
console.log(fillExample);
//?This method overwrites the original array.
console.log(fruits4);

//todo: filter()
/* 
The filter() method creates an array filled with 
all array elements that pass a test (provided as a function).

Return value : An Array containing all the array elements that pass the test.
 If no elements pass the test it returns an empty array.
!Note: filter() does not execute the function for array elements without values.
*/
//? Note: filter() does not change the original array.

//*Syntax: array.filter(function(currentValue, index, arr), thisValue)

let fruits5 = ["banana", "orange", "apple", "mango", "banana", "Banana"];

let filterExample = fruits5.filter((element) => element === "banana");
//you can manipulate what you are looking for to make it not case sensitive with
//toUpper or to LowerCase
console.log(filterExample);

//todo: find()
/* 
This method returns the value of the first element
 in an array that pass a test (provided as a function).

The find() method executes the function
once for each element present in the array:

If it finds an array element where the function returns a true value,
find() returns the value of that array element (and does not check the
remaining values)
Otherwise it returns undefined

Return Value: Returns the array element value if any of the elements
in the array pass the test, otherwise it returns undefined
*/
//!Note: find() does not execute the function for empty arrays.
//? Note: find() does not change the original array.

//*Syntax array.find(function(currentValue, index, arr),thisValue)

let fruits6 = ["banana", "orange", "apple", "mango", "banana2", "Banana"];

let findExample = fruits6.find((element) => element === "banana1");
let findExample2 = fruits6.find((element) => element === "banana2");

console.log(findExample);
console.log(findExample2);
console.log(typeof findExample2); //returns whatever type the element is

//todo: findIndex()
/* 
The findIndex() method returns the index of the first element
in an array that pass a test (provided as a function).

The findIndex() method executes the function once for
each element present in the array:

If it finds an array element where the function returns
a true value.

Return: findIndex() returns the index of that array element
(and does not check the remaining values)
Otherwise it returns -1


*/

//!Note: findIndex() does not execute the function for array elements without values.
//?Note: findIndex() does not change the original array.

//*Syntax array.findIndex(function(currentValue, index, arr), thisValue)

let fruits7 = ["banana", "orange", "apple", "mango", "pineapple", "pear"];

let findIndexExample = fruits7.findIndex((element) => element === "pear");
let findIndexExample1 = fruits7.findIndex((element) => element === "pear1");

console.log(findIndexExample);
console.log(findIndexExample1);

/* 
-1 means "no match found".

The reason it returns -1 instead of "false" is that a needle
at the beginning of the string would be at position 0,
which is equivalent to false in Javascript. So returning -1 ensures
that you know there is not actually a match.
*/

//todo: isArray()
/* 
The isArray() method determines whether an object is an array.
This function returns true if the object is an array, and false if not.
*/

//*Syntax: Array.isArray(obj)

let fruits8 = ["banana", "orange", "apple", "mango", "pineapple", "pear"];
let notArray = 'I am a string';
//Returns a Boolean.

let isArrayExample = Array.isArray(fruits8);
console.log(isArrayExample);
let isNotArrayExample = Array.isArray(notArray);
console.log(isNotArrayExample);


//todo: forEach()
/* 
The forEach() method calls a function once for each element in an array, in order.
forEach has no result value. A function without any result value is useless, unless it has some side effects
*/
//!Note: the function is not executed for array elements without values.

//*Syntax: array.forEach(function(currentValue, index, arr), thisValue)


let fruits9 = ["banana", "orange", "apple", "mango", "pineapple", "pear"];


//***** */
let forEachExample = [];

fruits9.forEach((element) => {
  forEachExample.push(element + ' juice')
});
//*** */


function fruitForEachFunction(element, index, arr) {
  arr[index] = element + ' juice'
}

let outSideCallBack = fruits9.forEach(fruitForEachFunction);

console.log(outSideCallBack);
console.log(forEachExample);
console.log(fruits9);

//todo: from()
/* 
The Array.from() static method creates a new,
 shallow-copied Array instance from an 
//*array-like or iterable object.

 Return Value: A new Array instance
*/
// arrayLike object, Map function to call on every element of the array, this value
//*Syntax: Array.from(arrayLike [, mapFn [, thisArg]])

console.log(Array.from("foo"));

//!Other examples of from)()
// Using an arrow function as the map function to
// manipulate the elements
console.log(Array.from([1, 2, 3], x => x + x)); 


// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Generate numbers range 0..4
console.log(range(0, 4, 1));


//todo: includes()
/* 
The includes() method determines whether an array contains a specified element.
This method returns true if the array contains the element, and false if not.
*/
//? Note: The includes() method is case sensitive.

//*Syntax: arr.includes(valueToFind[, fromIndex])

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

