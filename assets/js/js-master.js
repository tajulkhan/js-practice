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

// Optional Chaining
const user = {
  name: "Taj",
  address: {
    city: "Lahore"
  }
};

console.log(user.address?.city); // "Lahore"
console.log(user.profile?.bio);  // undefined (no error!)

// l Integration Example (Real-world Scenario)
const response = {
  success: true,
  users: [
    { id: 1, name: "Taj", email: "taj@email.com", active: true },
    { id: 2, name: "Ali", email: "ali@email.com", active: false },
    { id: 3, name: "Sara", email: null, active: true },
  ],
};

// Processing the data
const result = response.users
  ?.filter(user => user.active)
  .map(({ name, email }) => ({
    name,
    email: email ?? "No Email Provided"
  }));

console.log(result);
/*
[
  { name: "Taj", email: "taj@email.com" },
  { name: "Sara", email: "No Email Provided" }
]
*/
// Mini Project: Order Summary Processor

const orders = [
  {
    id: 1,
    user: { name: "Taj", email: "taj@email.com" },
    status: "completed",
    items: [
      { name: "Book", price: 10 },
      { name: "Pen", price: 2 }
    ]
  },
  {
    id: 2,
    user: { name: "Ali", email: "ali@email.com" },
    status: "pending",
    items: [{ name: "Laptop", price: 1000 }]
  },
  {
    id: 3,
    user: { name: "Taj", email: "taj@email.com" },
    status: "completed",
    items: [{ name: "Notebook", price: 5 }]
  }
];

const completedOrders = orders
  .filter(order => order.status === "completed");

const userTotals = completedOrders.reduce((acc, order) => {
  const { user: { name }, items } = order;
  const total = items?.reduce((sum, item) => sum + item.price, 0) ?? 0;

  acc[name] = (acc[name] || 0) + total;
  return acc;
}, {});

console.log(userTotals);
// { Taj: 17 }

const fetchUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);
  });
};

const fetchAllUsers = async () => {
  const users = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3),
  ]);

  console.log(users);
};

fetchAllUsers();
/*
[
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" }
]
*/
// debounce and throttle
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((query) => {
  console.log("Searching for", query);
}, 500);

search("T");
search("Ta");
search("Taj"); // Only logs "Searching for Taj"

// Throttle (limit how often a function runs)
function throttle(fn, limit) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

const onScroll = throttle(() => {
  console.log("Scroll event fired");
}, 1000);
// Factory Pattern
function UserFactory(role) {
  if (role === "admin") {
    return { role, permissions: ["read", "write", "delete"] };
  } else if (role === "guest") {
    return { role, permissions: ["read"] };
  } else {
    return { role, permissions: [] };
  }
}

const admin = UserFactory("admin");
const guest = UserFactory("guest");

console.log(admin); // { role: "admin", permissions: [...] }
// Strategy Pattern
class CreditCardPayment {
  pay(amount) {
    console.log(`Paid ₹${amount} using Credit Card`);
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Paid ₹${amount} using PayPal`);
  }
}

class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  process(amount) {
    this.strategy.pay(amount);
  }
}

// Usage
const creditCard = new PaymentProcessor(new CreditCardPayment());
creditCard.process(500); // Paid ₹500 using Credit Card

const paypal = new PaymentProcessor(new PayPalPayment());
paypal.process(800); // Paid ₹800 using PayPal

// Rewrite 'if..else' into '?'

let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
console.log(message);

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
// object concept
let user = {     
  name: "John",  
  age: 30       
};
user.isAdmin = true;
delete user.age;
console.log(user);

let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); 
// Computed properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// Property value shorthand
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("John", 30);
alert(user.name); 
// Property names limitations
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return ); 


// both alerts access the same property (the number 0 is converted to string "0")
let obj = {
  0: "test" // same as "0": "test"
};

alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

// Property existence test, “in” operator
let user = {};
alert( user.noSuchProperty === undefined ); // true means "no such property"

let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

let user = { age: 30 };
let key = "age";
alert( key in user ); // true, property "age" exists

let obj = {
  test: undefined
};
alert( obj.test ); // it's undefined, so - no such property?
alert( "test" in obj ); // true, the property does exist!

// The "for..in" loop
for (key in object) {
  // executes the body for each key among object properties
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  console.log(key)
  // values for the keys
  console.log(user[key]);
}
// Ordered like an object
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};
for (let code in codes) {
    console.log(code);
}

// Cloning and merging, Object.assign
let user = {
  name: "John",
  age: 30
};
let clone = {};
for (let key in user) {
  clone[key] = user[key];
}
clone.name = "Pete"; 
// alert( user.name ); 
console.log(clone.name)

// Nested cloning
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height );
//------------------------------------------
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let clone = Object.assign({}, user);
alert( user.sizes === clone.sizes ); 
user.sizes.width = 60;    
alert(clone.sizes.width); 

// structuredClone
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let clone = structuredClone(user);
alert( user.sizes === clone.sizes ); // false, different objects
// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
console.log(user)
console.log(clone)

// Object methods, "this"
let user = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
  alert( this.name );
}
// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// Arrow functions have no “this”
let user = {
  firstName: "Tajul",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); 

// Using "this" in object literal
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John

//Constructor function
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

// Constructor mode test: new.target
function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }
  this.name = name;
}
let john = User("John"); // redirects call to new User
alert(john.name); // John

// Return from constructors
function BigUser() {
  this.name = "John";
  return { name: "Godzilla" };  // <-- returns this object
}
alert( new BigUser().name );  // Godzilla, got that object

function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}

alert( new SmallUser().name );  // John
// Methods in constructor
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John
