const events = [
    { today: {} },
    { tomorrow: {} },
    { yesterday: {} }
];
console.log(events);

if (
  Object.keys(events[0].today).length === 0 &&
  Object.keys(events[1].tomorrow).length === 0 &&
  Object.keys(events[2].yesterday).length === 0
) {
  console.log("Empty");
} else {
  console.log("The evnet available");
}


const mixedArray = [[], {}, {}];

if (Array.isArray(mixedArray[0]) && mixedArray[0].length === 0) {
  console.log("First element is an empty array"); 
}

if (typeof mixedArray[1] === "object" && !Array.isArray(mixedArray[1]) && Object.keys(mixedArray[1]).length === 0) {
  console.log("Second element is an empty object");
}

if (typeof mixedArray[2] === "object" && !Array.isArray(mixedArray[2]) && Object.keys(mixedArray[2]).length === 0) {
  console.log("Third element is an empty object");
}
console.log("--------------------------------------");

// Can You Check for Empty Objects and Arrays Together

function isEmpty(item) {
    if (Array.isArray(item)) {
      return item.length === 0; // Check for empty array
    } else if (typeof item === "object" && item !== null) {
      return Object.keys(item).length === 0; // Check for empty object
    }
    return false; // For other types
  }
  
  const mixedArrayEmty = [[], {}, { key: "value" }];
  
  mixedArrayEmty.forEach((item, index) => {
    if (isEmpty(item)) {
      console.log(`Element at index ${index} is empty`);
    } else {
      console.log(`Element at index ${index} is not empty`);
    }
  });
  

//   Reverse a String

function reverseString(str){
    return str.split('').reverse().join("");
}
console.log(reverseString("racecar"));

// Find the Maximum Number in an Array

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Example usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("madam"));   // Output: true

// FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage
fizzBuzz(15);
/* Output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/
// Find the Largest Number in an Array
const arrLg = [1, 3, 7, 2, 5];
function findLargest(arr) {
  return Math.max(...arr); // Spread the array to pass individual values to Math.max
}
console.log(findLargest(arrLg)); // Output: 7


// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// Sum of Array Elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10

// Count Vowels in a String
function countVowels(str) {
  const vowels = "aeiou";
  return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}

console.log(countVowels("hello")); // Output: 2

// Find Factorial

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// Closures
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const newFunction = outerFunction("Hello");
newFunction("World"); // Output: Outer: Hello, Inner: World

//  Higher-Order Functions
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10

// Array-Like Objects
const arrayLike = {
  0: "apple",
  1: "banana",
  2: "cherry",
  length: 3, // Important for conversion
};

// Convert to an array using Array.from()
const arr = Array.from(arrayLike);
console.log(arrayLike); // Output: ["apple", "banana", "cherry"]


// Arguments Object (Array-like)

function showArguments() {
  console.log(arguments); // Array-like object
  console.log(Array.from(arguments)); // Convert to array
}

showArguments(1, 2, 3, 4);

// NodeList & HTMLCollection (Array-like)

const divs = document.querySelectorAll("div"); // Returns a NodeList
console.log("divs", divs.length); // Can access length like an array
console.log([...divs]); // Convert to an array

// Typed Arrays (Efficient Arrays)

const buffer = new ArrayBuffer(16); // 16-byte buffer
const intArray = new Int32Array(buffer);
intArray[0] = 42;

console.log(intArray[0]); // Output: 42

// Map (Object-like but ordered)
const userMap = new Map();
userMap.set("name", "Taj");
userMap.set("age", 30);

console.log(userMap.get("name")); // Output: Taj
console.log([...userMap]); // Convert to an array

// Set (Array-like but unique values)
const uniqueNumbers = new Set([1, 2, 3, 3, 4]);
console.log([...uniqueNumbers]); // Output: [1, 2, 3, 4]

// String (Behaves like an array)
const str = "hello";
console.log(str[1]); // Output: e
console.log(Array.from(str)); // Convert to array

// Custom Array-like Object

const customArray = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  },
};

customArray.forEach((value, index) => console.log(value, index));

// Factorial Using Recursion
// How It Works?

// factorial(5) → 5 * factorial(4)
// factorial(4) → 4 * factorial(3)
// factorial(3) → 3 * factorial(2)
// factorial(2) → 2 * factorial(1)
// factorial(1) → 1 (Base case stops recursion)
function factorials(n) {
  if (n === 1) return 1; // Base case (stopping condition)
  return n * factorials(n - 1); // Recursive call
}

console.log(factorials(5)); // Output: 120


// Fibonacci Series Using Recursion
// Problem: Find the nth Fibonacci number, where:
// fib(0) = 0
// fib(1) = 1
// fib(n) = fib(n-1) + fib(n-2)
function fibonacci(n) {
  if (n <= 1) return n; // Base case
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive call
}

console.log(fibonacci(6)); // Output: 8

// Optimized Fibonacci (Using Memoization)
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n]; // Check if already computed
  if (n <= 1) return n; // Base case

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo); // Store result
  return memo[n];
}
console.log(fibonacciMemo(6)); // Output: 8

// Sum of Array Using Recursion
function sumArray(arr, index = 0) {
  if (index === arr.length) return 0; // Base case
  return arr[index] + sumArray(arr, index + 1); // Recursive call
}
console.log(sumArray([2, 4, 6])); // Output: 12

// Practical Use Cases of Closures
// Private Variables using Closures
// Closures can be used to create private variables, meaning they cannot be accessed from outside the function.

function counter() {
  let count = 0; // Private variable

  return {
      increment: function () {
          count++;
          console.log(count);
      },
      decrement: function () {
          count--;
          console.log(count);
      },
      getCount: function () {
          return count;
      }
  };
}

const myCounter = counter();
myCounter.increment(); // Output: 1
myCounter.increment(); // Output: 2
console.log(myCounter.getCount()); // Output: 2

// 2. Function Factory (Generating Functions Dynamically)
// Closures allow us to generate multiple versions of a function dynamically.
function multiplier(factor) {
  return function (num) {
      return num * factor;
  };
}

const doubles = multiplier(10);
const triple = multiplier(3);

console.log(doubles(5)); // Output: 50
console.log(triple(5)); // Output: 15