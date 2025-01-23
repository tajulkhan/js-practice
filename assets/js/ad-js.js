async function fetchSequentialData() {
  const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postData.json();

  const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${posts[0].userId}`);
  const user = await userData.json();
  console.log(user);


  console.log(user.name);
}

fetchSequentialData();

var x = 220;
var y = "Hello";
var z = undefined;

// x | | y    // Returns 220 since the first value is truthy

// x | | z   // Returns 220 since the first value is truthy

// x && y    // Returns "Hello" since both the values are truthy

// y && z   // Returns undefined since the second value is falsy

if (x && y) {
  console.log("Code runs"); // This block runs because x && y returns "Hello" (Truthy)
}

if (x || z) {
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}

const set = new Set([1, 2, 3, 3]);
console.log(set); // Set { 1, 2, 3 }

const map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // 'value'

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;  // Skips when i equals 5
  if (i === 8) break;     // Breaks the loop when i equals 8
  console.log(i);         // Outputs 0, 1, 2, 3, 4, 6, 7
}

async function fetchData() {
  const urls = ['url1', 'url2', 'url3'];
  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
}
// Finding the Maximum/Minimum Value in an Array
const numbers = [3, 1, 4, 1, 5, 9];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max);
console.log(min);


// Reversing an Array
const arr = [1, 2, 3, 4];
const reversedArr = arr.reverse();
console.log(reversedArr);

// Checking if a String is a Palindrome
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

// To sort an array in ascending order
const arrSorting = [5, 3, 8, 1];
arrSorting.sort((a, b) => a - b);
console.log(arrSorting);

// Removing Duplicates from an Array
const arrDup = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arrDup)]
console.log(uniqueArr);

// Event Delegation
// Event delegation is a technique to handle events on dynamically added elements without needing to bind an event listener to each element:
document.querySelector("#parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches("button.class-name")) {
    console.log("Button clicked!");
  }
});

// Promise with Async/Await
// Handling asynchronous code with Promises and async/await:

function fetchDatas() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
}

async function getData() {
  try {
    const result = await fetchDatas();
    console.log(result); // "Data fetched!"
  } catch (error) {
    console.log(error);
  }
}

getData();


// Array Map and Filter

// Map transforms each element of the array:

const arrMap = [1, 2, 3];
const doubled = arrMap.map(x => x * 2);
console.log(doubled); // [2, 4, 6]

// Filter filters elements based on a condition:
const numbersE = [1, 2, 3, 4, 5];
const evenNumbers = numbersE.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2, 4]


function modifyArray(arrCb, callback) {
  // do something to arr here
  arrCb.push(100);
  // then execute the callback function that was passed
  callback();
}

var arrCb = [1, 2, 3, 4, 5];

modifyArray(arrCb, function () {
  console.log("array has been modified", arrCb);
});

// Explain closures and provide an example
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // logs 'I am outside!'


// What are Promises and why are they used? Resolve and Reject 
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Success!');
    reject('Failed!');
  }, 1000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error)
  })
// What are Generators in JavaScript?
function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}

const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);

// What is the purpose of Promise.all and Promise.race?
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));

Promise.all([promise1, promise2]).then(values => {
  console.log(values); // [3, 'foo']
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // 3
});

// Explain this keyword in arrow functions

const person = {
  name: 'John',
  greet: function() {
    setTimeout(() => {
      console.log('Hello, ' + this.name);
    }, 1000);
  }
};

person.greet(); 
// localStorage
localStorage.setItem('key', 'value');
console.log(localStorage.getItem('key')); // 'value'

// sessionStorage
sessionStorage.setItem('key', 'value');
console.log(sessionStorage.getItem('key')); // 'value'
// Explain ArrayBuffer and TypedArray.
let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // 42

// What is Intl and why is it used?
let number = 123456.789;

console.log(new Intl.NumberFormat('de-DE').format(number)); // "123.456,789"
console.log(new Intl.NumberFormat('en-IN').format(number)); // "1,23,456.789"\


// What are Set and WeakSet?

let sets = new Set([1, 2, 3, 4, 4]);
console.log(sets); // Set { 1, 2, 3, 4 }

let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true