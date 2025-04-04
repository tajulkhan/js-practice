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
