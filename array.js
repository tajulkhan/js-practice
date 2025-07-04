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
// Original array
let numbers = [4, 9, 16, 25];
let sub = numbers.map(geeks);
function geeks() {
    return numbers.map(Math.sqrt);
}
console.log(sub);
 // join method
// 11. How do you use the join method?
// The join method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. 
// It is useful for creating a string from the elements of an array, such as converting an array of words into a sentence.
let fruits = ['apple', 'banana', 'cherry'];
let fruitString = fruits.join(', ');
console.log(fruitString);
// 12. What is array destructuring and how does it work?
// Array destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a convenient way to extract multiple elements 
// from array and assign them to variables in a single statement. You can also set default values for the variables in case the array does not contain enough elements.
let fruits = ['apple', 'banana', 'cherry'];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
let [first, second, third, fourth = 'default'] = fruits;
console.log(fourth)
// 13. How do you copy an array?
// You can copy an array using the spread operator (...) or the Array.from method. Both methods create a shallow copy of the original array. 
// The spread operator is concise and widely used, while Array.from is useful when you need to convert array-like objects or iterable objects to arrays.
let fruits = ['apple', 'banana', 'cherry'];
// Using spread operator
let fruitsCopy = [...fruits];
console.log(fruitsCopy);
// Using Array.from method
let fruitsCopy2 = Array.from(fruits);
console.log(fruitsCopy2);
// 16. How does the flatMap method work?
// The flatMap method first maps each element using a mapping function, then flattens the result into a new array. It is similar to map followed by flat with a depth of 
// 1. The flatMap method is useful for scenarios where you need to both transform and flatten an array in a single step.
// Creating multilevel array
const numbers = [['1', '2'], ['3', '4',
    ['5', ['6'], '7']]];

const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers);
// 18. Explain the fill method with an example.
// The fill method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length). 
// It returns the modified array. The fill method is useful for initializing an array with a specific value or resetting elements in an existing array.
let numbers = [1, 2, 3, 4];
numbers.fill(0, 2, 4); // Fills with 0 from index 2 to 4 (exclusive)
console.log(numbers);
