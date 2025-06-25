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
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length);
// 6. How do you check if a variable is an array?
// To check if a variable is an array, you can use the Array.isArray method. This method returns true if the variable is an array, and false otherwise.
let fruits = ['apple', 'banana'];
console.log(Array.isArray(fruits));
let notArray = 'apple';
console.log(Array.isArray(notArray));
// 7. How do you iterate over an array?
// You can iterate over an array using a for loop. This allows you to access each element in the array by its index.
let fruits = ['apple', 'banana', 'cherry'];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// 8. How do you use the forEach method?
// The forEach method is used to execute a provided function once for each array element.
// It takes a callback function as an argument, which is called with each element, its index, and the entire array.
// The forEach method does not return a new array and does not modify the original array.
