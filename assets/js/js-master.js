// Core JavaScript Concepts to Master

// closure function
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}
// Create a new counter instance
const counter = createCounter();
// Use the methods and log their output
console.log("Initial count:", counter.getCount());  // 0
console.log("Incrementing count:", counter.increment());  // 1
console.log("Incrementing count again:", counter.increment());  // 2
console.log("Decrementing count:", counter.decrement());  // 1
console.log("Final count:", counter.getCount());  // 1

// Prototypal inheritance
function Persons(name){
    this.name = name;
}
// Print the greeting from each instance
Persons.prototype.greets = function() {
    return `Hello, ${this.name}`;
};
const p1 = new Persons("Taj");
const p2 = new Persons("khan");
console.log(p1.greets());
console.log(p2.greets());

// Promise Chains & async/await
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
};
// 🔁 Promise Chains
fetchData()
  .then((res) => {
    console.log(res); // "Data fetched!"
    return "Step 2";
  })
  .then((res) => {
    console.log(res); // "Step 2"
    return "Step 3";
  })
  .catch((err) => console.error(err));

// ⏳ async/await (cleaner syntax for Promises)
  const getData = async () => {
  try {
    const result = await fetchData();
    console.log(result); // "Data fetched!"
    console.log("Next Step");
  } catch (err) {
    console.error(err);
  }
};

const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]


getData();
// 🧭 1. map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// 🔍 2. filter()
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

// 📦 3. reduce()
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// Real-world example:

const users = [
  { name: "Taj", age: 25 },
  { name: "Ali", age: 17 },
  { name: "Sara", age: 30 },
];

const adults = users
  .filter((user) => user.age >= 18)
  .map((user) => user.name);

console.log(adults); // ["Taj", "Sara"]
