//Array concept basic and intermediated and advanced 
// 1. What is an array in JavaScript? How do you declare an array?
// An array in JavaScript is a data structure that allows you to store multiple values in a single variable. 
// Arrays can hold values of any data type, and each value is accessed using an index, with the first index being 0.
// Declaring an array with three elements
let fruits = ['apple', 'banana', 'cherry'];

// 2. How do you access the elements of an array?
// Elements in an array are accessed using their index. The index of the first element is 0, the second element is 1, and so on.
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. How can you add elements to an array?
// Elements can be added to an array using the push method to add to the end, and the unshift method to add to the beginning.
let fruits = ['apple', 'banana'];
fruits.push("cherry");
fruits.unshift("orange");
console.log(fruits);
// 4. How can you remove elements from an array?
// Elements can be removed from an array using the pop method to remove from the end, and the shift method to remove from the beginning.
let fruits = ['apple', 'banana', 'cherry'];
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
// 5. What is length property of an array?
// The length property of an array returns the number of elements in the array. It is a dynamic property, which means it automatically updates when the array changes
