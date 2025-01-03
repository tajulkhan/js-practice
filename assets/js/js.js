//start pattern
let rows = 10;
for(let i = rows; i>=1; i--){
    let star="";
    for(let j=1; j<=i; j++){
        star+="*";
    }
    console.log(star);
}
//start pattern reverse

let row = 10;
for(let i = 1; i<=row; i++){
    let star="";
    for(let j=1; j<=i; j++){
        star+="*";
    }
    console.log(star);
}

// star pattern pyramid 
let rows1 = 5;
for (let i = 1; i <= rows1; i++) {
  let stars = '';
  for (let j = 1; j <= rows1 - i; j++) {
    stars += ' '; 
  }
  for (let k = 1; k <= (2 * i - 1); k++) {
    stars += '*';
  }
  console.log(stars); 
}


// Diamond Star Pattern
let rows2 = 5; 

for (let i = 1; i <= rows2; i++) {
  let stars = '';
  for (let j = 1; j <= rows2 - i; j++) {
    stars += ' ';
  }
  for (let k = 1; k <= (2 * i - 1); k++) {
    stars += '*';
  }
  console.log(stars); 
}

for (let i = rows2 - 1; i >= 1; i--) {
  let stars = '';
  for (let j = 1; j <= rows2 - i; j++) {
    stars += ' ';
  }
  for (let k = 1; k <= (2 * i - 1); k++) {
    stars += '*';
  }
  console.log(stars); 
}

// map() Transforming Elements in an Array
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log(squares);

// filter() - Filtering Elements in an Array
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers1.filter((num) => num % 2 === 0);
console.log(evenNumbers);  

// .reduce() - Reducing an Array to a Single Value
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((acc, num)=> acc + num, 0);
console.log(sum);  // Output: 15

// Combining .map() and .filter()
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squaredEvenNumbers = numbers3.filter((num)=> num % 2 === 0)
.map((num)=>num * num);

console.log(squaredEvenNumbers);  

// Using .reduce() to Group Data
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Joe", age: 25 },
  { name: "Anna", age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
  // Check if the group for this age already exists
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  // Push the person into the correct age group
  acc[person.age].push(person);
  return acc;
}, {}); // Start with an empty object

console.log(groupedByAge);

// promise

function promise(){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          const data = {name:"js", leval:20};
          resolve(data)
      }, 2000);
  });
}
promise()
.then((data)=>console.log("Fetch data", data))
.catch((error)=>console.error("error fetching data error"));

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'Taj', age: 25 };
      resolve(data);
    }, 2000);
  });
}
// Chaining Promises
fetchData()
  .then((data) => {
    console.log('Data received:', data);
    return data.name;
  })
  .then((name) => console.log('Name:', name))
  .catch((error) => console.error('Error:', error));
  
  // Async/Await with Promises
  async function fetchDataAsync() {
    try {
      const data = await fetchData();
      console.log('Async fetched data:', data);
    } catch (error) {
      console.error('Async error:', error);
    }
  }
  
  fetchDataAsync();
  

let age = 25;
let hasTicket = true;
let isVIP = false;

if (age >= 18 && hasTicket) {
    if (isVIP) {
        console.log("Welcome VIP! Enjoy your premium experience.");
    } else {
        console.log("Welcome! Enjoy the event.");
    }
} else if (age < 18 && hasTicket) {
    console.log("You are underage, but you can still attend with a guardian.");
} else if (!hasTicket) {
    console.log("Sorry, you need a ticket to enter.");
} else {
    console.log("Invalid access.");
}

let userRole = 'admin';
let isAuthenticated = true;
let hasPermission = true;

if (isAuthenticated && (userRole === 'admin' || userRole === 'manager') && hasPermission) {
    console.log("Access granted to admin or manager.");
} else if (isAuthenticated && userRole === 'user' && hasPermission) {
    console.log("Access granted to regular user.");
} else if (!isAuthenticated) {
    console.log("User is not authenticated.");
} else if (!hasPermission) {
    console.log("User does not have sufficient permissions.");
} else {
    console.log("Access denied.");
}


let status = 'completed';

switch (status) {
    case 'pending':
        console.log('Your task is still pending.');
        break;
    case 'in-progress':
        console.log('Your task is in progress.');
        break;
    case 'completed':
        console.log('Your task is completed.');
        break;
    case 'failed':
        console.log('Your task has failed.');
        break;
    default:
        console.log('Unknown task status.');
}

// Simulate a pizza ordering system in JavaScript

class PizzaOrder {
  constructor() {
    this.size = '';
    this.toppings = [];
    this.status = 'No order placed yet.';
  }

  // Method to set pizza size
  setSize(size) {
    this.size = size;
    console.log(`Pizza size set to: ${this.size}`);
  }

  // Method to add toppings
  addTopping(topping) {
    if (!this.toppings.includes(topping)) {
      this.toppings.push(topping);
      console.log(`Added topping: ${topping}`);
    }
  }

  // Method to place the order
  placeOrder() {
    if (this.size === '' || this.toppings.length === 0) {
      console.log('Please choose a size and at least one topping!');
      this.status = 'Order not complete.';
      return;
    }

    this.status = 'Order placed. Preparing your pizza...';
    console.log(this.status);

    // Simulating preparation time
    setTimeout(() => {
      this.status = 'Your pizza is ready!';
      console.log(this.status);
      console.log(`You have ordered a ${this.size} pizza with the following toppings: ${this.toppings.join(', ')}.`);
    }, 3000); // Simulate a 3-second delay for pizza preparation
  }

  // Method to display current status
  displayStatus() {
    console.log(`Status: ${this.status}`);
  }
}

// Create a new pizza order instance
const myOrder = new PizzaOrder();

// Set pizza size and toppings
myOrder.setSize('Medium');
myOrder.addTopping('Cheese');
myOrder.addTopping('Pepperoni');

// Place the order
myOrder.placeOrder();

// Check order status after a few seconds
setTimeout(() => {
  myOrder.displayStatus();
}, 3500); // After 3.5 seconds, check the status
