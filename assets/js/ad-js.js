async function fetchSequentialData() {
  const postData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postData.json();

  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${posts[0].userId}`
  );
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
  console.log("Code runs"); // This block runs because x || y returns 220(Truthy)
}

const set = new Set([1, 2, 3, 3]);
console.log(set); // Set { 1, 2, 3 }

const map = new Map();
map.set("key", "value");
console.log(map.get("key")); // 'value'

for (let i = 0; i < 10; i++) {
  if (i === 5) continue; // Skips when i equals 5
  if (i === 8) break; // Breaks the loop when i equals 8
  console.log(i); // Outputs 0, 1, 2, 3, 4, 6, 7
}

async function fetchData() {
  const urls = ["url1", "url2", "url3"];
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
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

// To sort an array in ascending order
const arrSorting = [5, 3, 8, 1];
arrSorting.sort((a, b) => a - b);
console.log(arrSorting);

// Removing Duplicates from an Array
const arrDup = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arrDup)];
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
const doubled = arrMap.map((x) => x * 2);
console.log(doubled); // [2, 4, 6]

// Filter filters elements based on a condition:
const numbersE = [1, 2, 3, 4, 5];
const evenNumbers = numbersE.filter((x) => x % 2 === 0);
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
  let outerVariable = "I am outside!";

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
    reject("Failed!");
  }, 1000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
// What are Generators in JavaScript?
function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);

// What is the purpose of Promise.all and Promise.race?
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "foo")
);

Promise.all([promise1, promise2]).then((values) => {
  console.log(values); // [3, 'foo']
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // 3
});

// Explain this keyword in arrow functions

const person = {
  name: "John",
  greet: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  },
};

person.greet();
// localStorage
localStorage.setItem("key", "value");
console.log(localStorage.getItem("key")); // 'value'

// sessionStorage

sessionStorage.setItem("key", "value");
console.log(sessionStorage.getItem("key")); // 'value'
// Explain ArrayBuffer and TypedArray.
let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // 42

// What is Intl and why is it used?
let number = 123456.789;

console.log(new Intl.NumberFormat("de-DE").format(number)); // "123.456,789"
console.log(new Intl.NumberFormat("en-IN").format(number)); // "1,23,456.789"

// What are Set and WeakSet?

let sets = new Set([1, 2, 3, 4, 4]);
console.log(sets); // Set { 1, 2, 3, 4 }

let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true

// isPalindrome
isPalindrome("racecar"); // Output: true
isPalindrome("hello"); // Output: false

// Sum of an Array
sumArray([1, 2, 3, 4]); // Output: 10
sumArray([-1, 0, 5]); // Output: 4

// Find the Largest Number
findLargest([1, 5, 3, 9, 2]); // Output: 9
findLargest([-10, -3, -5]); // Output: -3

// Count Vowels
countVowels("hello world"); // Output: 3
countVowels("why?"); // Output: 0

// Implement Stack
// Create a class Stack with the following methods:
// push(element) → Add an element to the stack.
// pop() → Remove the top element from the stack.
// peek() → Get the top element of the stack.
// isEmpty() → Check if the stack is empty.
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
console.log(stack.pop()); // Output: 20
console.log(stack.isEmpty()); // Output: false

// Problem: Reverse an Array
// Write a function to reverse an array in place without using built-in methods like reverse.
function reverseArray(arr) {
  let left = 0; // Start pointer
  let right = arr.length - 1; // End pointer

  while (left < right) {
    // Swap elements at left and right pointers
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers
    left++;
    right--;
  }

  return arr;
}

// Test Cases
console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // Output: ["c", "b", "a"]
console.log(reverseArray([10])); // Output: [10]
console.log(reverseArray([])); // Output: []

// Problem: Check for Palindrome

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Use two pointers to check for palindrome
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }

  return true; // It's a palindrome
}

// Test Cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("No 'x' in Nixon")); // Output: true
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("12345")); // Output: false
     
// Find the Longest Word in a Sentence
const longestWord = (str) => str.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

console.log(longestWord("The quick brown fox jumps")); 

// Promises & Async/Await
const fetchData = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched successfully!");
      }, 2000);
  });
};
fetchData().then(data => console.log(data)); 

// Working with Set Inside an Object
const myObject = {
  numbers: new Set([1, 2, 3, 4, 5]),

  addNumber(num) {
      this.numbers.add(num);
  },

  removeNumber(num) {
      this.numbers.delete(num);
  },

  hasNumber(num) {
      return this.numbers.has(num);
  },

  getNumbers() {
      return [...this.numbers]; // Convert Set to Array
  }
};

// Usage
myObject.addNumber(6);
console.log(myObject.getNumbers()); // [1, 2, 3, 4, 5, 6]

myObject.removeNumber(3);
console.log(myObject.getNumbers()); // [1, 2, 4, 5, 6]

console.log(myObject.hasNumber(4)); // true
console.log(myObject.hasNumber(10)); // false

// Using Set to Store Unique Usernames
const userDatabase = {
  users: new Set(),

  addUser(username) {
      if (!this.users.has(username)) {
          this.users.add(username);
          console.log(`${username} added.`);
      } else {
          console.log(`${username} already exists!`);
      }
  },

  removeUser(username) {
      this.users.delete(username);
      console.log(`${username} removed.`);
  },

  getUsers() {
      return [...this.users];
  }
};

userDatabase.addUser("Taj");
userDatabase.addUser("John");
userDatabase.addUser("Taj"); 
console.log(userDatabase.getUsers()); 
userDatabase.removeUser("John");
console.log(userDatabase.getUsers()); 

// Storing Unique Product IDs in a Set
const productManager = {
  products: new Set(),

  addProduct(id) {
      this.products.add(id);
  },

  removeProduct(id) {
      this.products.delete(id);
  },

  listProducts() {
      return [...this.products];
  }
};

// Usage
productManager.addProduct(101);
productManager.addProduct(102);
productManager.addProduct(101); // Duplicate, won't be added

console.log(productManager.listProducts()); // [101, 102]

productManager.removeProduct(101);
console.log(productManager.listProducts()); // [102]

// Tracking User Login History Using Set
const loginTracker = {
  logins: new Set(),
  maxSize: 5,

  addLogin(username) {
      this.logins.delete(username); 
      this.logins.add(username);
      if (this.logins.size > this.maxSize) {
          this.logins.delete([...this.logins][0]); 
      }
  },

  getLogins() {
      return [...this.logins];
  }
};
loginTracker.addLogin("Taj");
loginTracker.addLogin("Taj");
loginTracker.addLogin("Alice");
loginTracker.addLogin("Bob");
loginTracker.addLogin("Eve");
loginTracker.addLogin("Charlie"); 
console.log(loginTracker.getLogins()); 

// Tracking API Requests with Cooldown Using Set
const apiLimiter = {
  activeRequests: new Set(),
  requestAPI(userId) {
      if (this.activeRequests.has(userId)) {
          console.log(`User ${userId} must wait before making another request.`);
          return;
      }
      console.log(`User ${userId} made an API request.`);
      this.activeRequests.add(userId);
      setTimeout(() => {
          this.activeRequests.delete(userId);
          console.log(`User ${userId} can make a new request.`);
      }, 5000);
  }
};
apiLimiter.requestAPI(101); 
apiLimiter.requestAPI(101); 
setTimeout(() => apiLimiter.requestAPI(101), 6000);

// Finding Unique Words in a Sentence Using Set
const wordAnalyzer = {
  analyze(sentence) {
      const words = sentence.toLowerCase().split(/\W+/);
      return new Set(words);
  }
};
console.log(wordAnalyzer.analyze("Taj is learning JavaScript and JavaScript is fun!"));

// Advanced Unique Cart System Using Set
const shoppingCart = {
  cart: new Set(),

  addProduct(product) {
      if (!this.cart.has(product)) {
          this.cart.add(product);
          console.log(`${product} added to cart.`);
      } else {
          console.log(`${product} is already in the cart.`);
      }
  },

  removeProduct(product) {
      this.cart.delete(product);
      console.log(`${product} removed from cart.`);
  },

  listProducts() {
      return [...this.cart];
  }
};

// Usage
shoppingCart.addProduct("Laptop");
shoppingCart.addProduct("Phone");
shoppingCart.addProduct("Laptop"); // Already exists

console.log(shoppingCart.listProducts()); // ['Laptop', 'Phone']
shoppingCart.removeProduct("Phone");
console.log(shoppingCart.listProducts()); // ['Laptop']

// Detecting Duplicate Usernames in Real-Time
const usernameValidator = {
  registeredUsers: new Set(),

  register(username) {
      if (this.registeredUsers.has(username.toLowerCase())) {
          console.log(`❌ Username "${username}" is already taken.`);
      } else {
          this.registeredUsers.add(username.toLowerCase());
          console.log(`✅ Username "${username}" registered successfully.`);
      }
  }
};

// Usage
usernameValidator.register("Taj");
usernameValidator.register("John");
usernameValidator.register("taj"); // Already taken (case insensitive)
usernameValidator.register("Alice");
console.log(usernameValidator.registeredUsers); 

// Removing Duplicate Items from a Shopping List
const shoppingList = ["Milk", "Eggs", "Butter", "Milk", "Bread", "Eggs", "Juice"];
const uniqueShoppingList = [...new Set(shoppingList)];
console.log(uniqueShoppingList); 

// Finding the First Repeating Character in a String
const firstRepeatingChar = (str) => {
  const seen = new Set();
  for (let char of str) {
      if (seen.has(char)) return char;
      seen.add(char);
  }
  return null;
};
console.log(firstRepeatingChar("javascript")); // "a"
console.log(firstRepeatingChar("abcdef")); // null
console.log(firstRepeatingChar("abccacdef")); // "c"

// Detecting & Blocking Spam Comments
const spamFilter = {
  postedComments: new Set(),
  postComment(comment) {
      const normalizedComment = comment.toLowerCase().trim();
      if (this.postedComments.has(normalizedComment)) {
          console.log("🚫 Duplicate comment detected!");
      } else {
          this.postedComments.add(normalizedComment);
          console.log("✅ Comment posted:", comment);
      }
  }
};
spamFilter.postComment("Nice post!");
spamFilter.postComment("Great work!");
spamFilter.postComment("Nice post!"); // 🚫 Duplicate detected

// Finding Unique Words in Multiple Articles
const extractUniqueWords = (articles) => {
  const words = new Set();

  articles.forEach(article => {
      article.toLowerCase().split(/\W+/).forEach(word => words.add(word));
  });

  return [...words].sort();
};

const articles = [
  "JavaScript is awesome! Learning JS every day.",
  "JS helps build web applications and interactive UI.",
  "The JavaScript ecosystem is growing rapidly."
];
console.log(extractUniqueWords(articles));

// Removing Duplicates Using Set
const numbersSet = [1, 2, 3, 4, 3, 2, 1, 5, 6, 7, 5];
const uniqueNumbers = [...new Set(numbersSet)];
console.log(uniqueNumbers); 

// Sorting Objects by Property Using sort()
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);

// Filtering Data Using filter()
const users = [
  { name: "Taj", active: true },
  { name: "John", active: false },
  { name: "Alice", active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers); 

// Transforming Data Using map()
const numbersMap = [1, 2, 3, 4, 5];
const squaredNumbers = numbersMap.map(num => num * num);
console.log(squaredNumbers);
