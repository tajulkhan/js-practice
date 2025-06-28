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
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
  	console.log(`Fruit at index ${index} is ${fruit}`);
});
// 9. What is the difference between for...of and for...in loops in arrays?
// The for...of loop iterates over the values of an array, whereas the for...in loop iterates over the keys (indexes) 
// of an array. The for...of loop is generally preferred for arrays because it directly accesses the elements,
// while the for...in loop is more suitable for iterating over object properties.
// 10. Explain the splice method with an example.
// The splice method changes the contents of an array by removing or replacing existing elements and/or 
// adding new elements in place. It modifies the original array and returns an array of the removed elements.
let fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, "mango", "graph");
console.log(fruits);


// Array reduce() Method
// The array reduce() method reduces an array to a single value by executing a provided function for each value from left to right.
// Example: Use the reduce() method to accumulate values, such as subtracting numbers.
