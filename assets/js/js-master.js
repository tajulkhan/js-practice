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

getData();
// 🧭 1. map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
