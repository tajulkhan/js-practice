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

// 3. Delayed Execution (setTimeout Example)
// Closures help retain values inside asynchronous functions.
function dMsg(dmsg, dly){
   setTimeout(function(){
    console.log(dmsg);
    
   }, dly)
}
dMsg("Hi taj how are you ", 2000)

// 4. Loop Issue (Fixing var in Loops)
// ❌ Problem: Using var inside setTimeout
// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//       console.log(i); // Prints 4, 4, 4 (wrong!)
//   }, i * 1000);
// }
// ✅ Fix: Use Closure (IIFE)
for (var i = 1; i <= 3; i++) {
  (function (x) {
      setTimeout(() => {
          console.log(x); // Prints 1, 2, 3 (correct!)
      }, x * 1000);
  })(i);
}

// Event Loop
// 1️⃣ Example of Event Loop in Action
console.log("Start event loop");
setTimeout(()=>{
  console.log("Interval");
  
}, 0)
console.log("Event loop end");

// 2️⃣ How JavaScript Handles Asynchronous Code

// 🛠 JavaScript uses three parts to manage execution: 1️⃣ Call Stack – Executes synchronous code (one at a time).
// 2️⃣ Web APIs – Handles async tasks (setTimeout, fetch, etc.).
// 3️⃣ Task Queue & Microtask Queue – Stores callbacks to execute later.

// 👉 Microtasks (Promises, async/await) always run before macrotasks (setTimeout, setInterval).

// 3️⃣ Microtask vs. Macrotask Example
console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask: Promise"));

console.log("End");

// 💪 Challenge Problem:
// What will be the output of this? 1, 4, 3, 2
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

Promise.resolve().then(() => {
  console.log("D");
  setTimeout(() => console.log("E"), 0);
});

console.log("F");

// ES6
// (Old Way - Function Scoped)
var x = 10;
if (true) {
  var x = 20; // Same variable is modified
  console.log(x); // 20
}
console.log(x); // 20 (Oops! `x` changed outside too)

// let (Block Scoped)
let y = 10;
if (true) {
  let y = 20; // Different variable inside the block
  console.log(y); // 20
}
console.log(y); // 10 (Outside value remains unchanged)

const obj = { name: "Taj" };
obj.name = "Super Taj";
console.log(obj); // ✅ Output: { name: 'Super Taj' }

// Object.freeze(user) makes the user object immutable.
// Attempting to modify user.age does not change the property because the object is frozen.
// So, even though user.age = 31; was attempted, the change is ignored.

// spread operator 
const user = { name: "Taj", age: 30 };
Object.freeze(user);
user.age = 31;
console.log(user);

const a = [1, 2, 3];
const b = [...a];
b[0] = 10;
console.log(a, b);
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1, arr2);

// 🔥 Advanced Array Concepts in JavaScript

const transactions = [
  { id: 1, type: "credit", amount: 500 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "debit", amount: 100 }
];
const totalDebit = transactions
  .filter(transaction => transaction.type === "debit")  // Get only debit transactions
  .reduce((sum, transaction) => sum + transaction.amount, 0); // Sum up debit amounts

console.log("Total Debit Amount =", totalDebit);

// Alternative 
let total = 0;
transactions.forEach(transaction => {
  if (transaction.type === "debit") {
    total += transaction.amount;
  }
});
console.log("Total Debit Amount =", total);

// Find the First Non-Repeating Character in a String
// Solution Using Map
const firstUniqueChar = (s) => {
  let charCount = new Map();

  // Count occurrences of each character
  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first character with count 1
  for (let char of s) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
};

const result = firstUniqueChar("aabbccdefg");
console.log("First Non-Repeating Character:", result);

// Alternative Approach (Using reduce())

const firstNonRepeating = (s) => {
  let frequency = [...s].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return [...s].find(char => frequency[char] === 1) || null;
};

console.log("First Non-Repeating Character:", firstNonRepeating("aabbccdefg"));

// ✅ Why is This Useful?
// Helps in data stream processing.
// Used in parsing unique words.
// Common in interview questions.

// Find the Longest Consecutive Sequence in an Array
const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  let numSet = new Set(nums);
  let maxLength = 0;

  for (let num of numSet) {
    // Check if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count the streak
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      maxLength = Math.max(maxLength, currentStreak);
    }
  }

  return maxLength;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log("Longest Consecutive Sequence Length:", longestConsecutive(nums));

// Using Boyer-Moore Voting Algorithm (Optimal)
const majorityElements = (numsV) => {
  let count = 0;
  let candidate = null;

  for (let num of numsV) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
};

const numsV = [3, 3, 4, 2, 3, 3, 3, 2, 3];
console.log("Majority Element:", majorityElements(numsV));


const findSubarraysWithSum = (arrs, target) => {
  let sumMap = new Map();
  let result = [];
  let sum = 0;

  sumMap.set(0, [-1]); // To handle cases where a subarrsay starts from index 0

  for (let i = 0; i < arrs.length; i++) {
    sum += arrs[i];

    if (sumMap.has(sum - target)) {
      let indices = sumMap.get(sum - target);
      for (let startIdx of indices) {
        result.push(arrs.slice(startIdx + 1, i + 1));
      }
    }

    if (!sumMap.has(sum)) {
      sumMap.set(sum, []);
    }
    sumMap.get(sum).push(i);
  }

  return result;
};

const arrs = [1, 2, 3, 4, 2, 1, 5];
const target = 5;
console.log("Subarrsays with sum", target, ":", findSubarraysWithSum(arr, target));

// Maximum Number in an Array
const findMax = (arr) => Math.max(...arr);
const arrMax = [10, 5, 20, 8, 25, 15];
console.log("Maximum number:", findMax(arrMax));
// Maximum Number in an Array for of 
const findLargestNumber = (arr) => {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

const arrMaxN = [10, 25, 36, 78, 45, 90, 3];
console.log("Largest number:", findLargestNumber(arrMaxN));

// Sum of All Numbers in an Array
const findSum = (arr) => arr.reduce((sum, num) => sum + num, 0);
const arrSum = [5, 10, 15, 20];
console.log("Sum of array:", findSum(arrSum));

// Sum of All Numbers in an Array
const findMaxs = (arr)=> Math.max(...arr);
const arrayMax=[10, 90, 89, 100];
console.log(findMax(arrayMax));
//Sum of All Using a for loop
const findSumFor = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

const arrFor = [5, 10, 15, 20];
console.log("Sum of array:", findSumFor(arrFor));

// Find the Even Numbers in an Array

const fEn = (arr)=> arr.filter(num=> num % 2 ===0);
const arrE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers:", fEn(arrE));
// Find the Even Numbers in an Array For loop
const arrForE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fEna =(arr)=>{
    let evnArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 ===0){
            evnArr.push(arr[i]);
        }
    }
    return evnArr;
}

console.log("Even numbers:", fEna(arr));

// findEvenNumbers for of 

const findEvenNumbers = (arr) => {
  let evenNumbers = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
};

const arrEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers:", findEvenNumbers(arrEven));

// Remove Duplicates from an Array

// Using Set (Best & Simplest Approach)
const removeDuplicates = (arr) => [...new Set(arr)];

const arrRd = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7];
console.log("Unique values:", removeDuplicates(arrRd));

// Using a for loop & includes()

const removeDuplicates = (arr) => {
  let uniqueArr = [];
  for (let num of arr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }
  return uniqueArr; 
};

const arrRdF = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7];
console.log("Unique values:", removeDuplicates(arrRdF));

// Reverse an Array Without Using reverse()
const reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

const arrRvrs = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArray(arrRvrs));

// slice() ensures the original array is not modified.
// reverse() quickly reverses the array.
const arrslice = [1, 2, 3, 4, 5];
console.log(arrslice.slice().reverse());

// Find the First Non-Repeating Element in an Array
// Using Map for Frequency Count
const firstUnique = (arr) => {
  const count = new Map();
  for (let num of arr) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  for (let num of arr) {
    if (count.get(num) === 1) return num;
  }
  return -1; 
};
const arrfirstUnique = [4, 5, 1, 2, 0, 4, 1, 2];
console.log("First unique number:", firstUnique(arrfirstUnique));
// Using a filter() 
const firstUniqueFilter = (arr) => arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num)) || -1;

const arrFilter = [4, 5, 1, 2, 0, 4, 1, 2];
console.log("First unique number:", firstUniqueFilter(arrFilter));

// Find the Missing Number in an Array
const findMissingNumber = (arr, n) => {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};

const arrFN = [1, 2, 4, 5, 6];
console.log("Missing number:", findMissingNumber(arrFN, 6));

// Find the Majority Element
const majorityElement = (nums) => {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
};
console.log(majorityElement([3, 3, 4, 2, 3, 3, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function createHelloWorld(){
  return function(){
      return "Hello World"
  }
}

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n) {
  return function() {
      return n++;
  };
}

// In this task, we need to create a function that returns an object with two separate functions. Given that the purpose of our parent function "expect" is to help developers test their code, it's possible that we may need to add more functionality later to account for different scenarios. Having our test functions inside an object helps us to keep the code organised and makes it easier to extend and add new methods without cluttering the global scope.
function expect(val) {
	const originalValue = val
	return {
		toBe: function(newVal) {
			if (newVal !== originalValue) {
				throw new Error("Not Equal")
			} else return true },
		notToBe: function(newVal) {
			if (newVal === originalValue) {
				throw new Error("Equal")
			} else return true 
		}
	}
}

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
function createCounter(init) {
  let current = init;

  return {
      increment: function() {
          current++;
          return current;
      },
      decrement: function() {
          current--;
          return current;
      },
      reset: function() {
          current = init;
          return current;
      }
  };
}
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
function map(arr, fn) {
  const result = [];  
  for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));  
  }
  return result;  
}
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.\
function filter(arr, fn) {
  const result = [];  
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {  
          result.push(arr[i]);  
      }
  }
  return result; 
}

// Find the Longest Word in a Sentence
// Using split() and Loop
const longestWord = (sentence) => {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
};
console.log(longestWord("The quick brown fox jumps over the lazy dog")); //"jumps"
console.log(longestWord("JavaScript is awesome")); //"JavaScript"
console.log(longestWord("I love coding challenges")); //"challenges"

// Remove Duplicates from an Array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana"])); 

