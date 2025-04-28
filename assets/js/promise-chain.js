// Promise Chain
// Basic Promise Chain

function stp1(){
    return Promise.resolve("Js");
}
function stp2(prev){
    return Promise.resolve(`${prev} and Css king`);
}
stp1()
    .then(rslt => stp2(rslt))
    .then(final => console.log(final));

// Same with Async/Await ^^^^
async function runTsk(){
    const s1 = await stp1();
    const s2 = await stp2(s1);
    console.log(s2);
}
runTsk();

//Fake API Chain with Delay
function fakeApi(name, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Data from ${name}`);
    }, delay);
  });
}
async function run() {
  const a = await fakeApi("ProductService", 1000);
  const b = await fakeApi("BillingService", 500);
  console.log(a, "|", b);
}
run();

 // Promise Error Handling in Chain
function mayFail(flag) {
  return new Promise((resolve, reject) => {
    flag ? resolve("Success") : reject("Something went wrong");
  });
}

mayFail(false)
  .then(console.log)
  .catch(console.error); // catches rejection

// Real-World: Parallel + Sequential API Calls
// Parallel (Optimized)
async function parallelCalls() {
  const [user, products] = await Promise.all([
    fakeApi("UserService", 1000),
    fakeApi("ProductService", 800)
  ]);
  console.log({ user, products });
}
// Sequential (Controlled flow)
async function sequentialCalls() {
  const user = await fakeApi("UserService", 1000);
  const orders = await fakeApi("OrderService", 700);
  console.log({ user, orders });
}

// Interview Challenge: Retry Async Until Success
function unstableApiCall() {
  return Math.random() > 0.7
    ? Promise.resolve("✅ Success!")
    : Promise.reject("❌ Failed, retry...");
}
async function retryUntilSuccess(retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await unstableApiCall();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  throw new Error("All retries failed");
}
retryUntilSuccess().then(console.log).catch(console.error);

// Promise.all
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.reject("C failed");

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(console.error); // → "C failed"

// Promise.allSettled
const tasks = [
  Promise.resolve("✔️ Success 1"),
  Promise.reject("❌ Error 2"),
  Promise.resolve("✔️ Success 3")
];
Promise.allSettled(tasks).then(results => {
  results.forEach(r => {
    if (r.status === "fulfilled") {
      console.log("✅", r.value);
    } else {
      console.log("⚠️", r.reason);
    }
  });
});

// Promise.race
const slow = new Promise(res => setTimeout(() => res("slow"), 2000));
const fast = new Promise(res => setTimeout(() => res("fast"), 100));
Promise.race([slow, fast]).then(console.log); // → "fast"

// Find largest number in array
const arr = [90, 34, 89, 65, 23];
const maxNumber = Math.max(...arr);
console.log(maxNumber);

// find the largest number using a for loop 
const numbers = [90, 80, 70, 60, 50];
let maxNumber = numbers[0];
for(let i =0; i< numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);

// find the largest number using a forEach logic 

const numbers = [90, 80, 70, 60, 50];
let maxNumber = numbers[0];
numbers.forEach(num => {
    if(num > maxNumber){
        maxNumber = num;
    }
});
console.log(maxNumber);

// find the largest number using a reduce method

const numbers = [5, 12, 8, 130, 44];
const maxNumber = numbers.reduce((max, current) => {
    return current > max ? current : max;
});
console.log(maxNumber);

const maxNumber = numbers.reduce((max, current)=>{
    return current > max ? 
})
//Promise.all 
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.reject("C failed");

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(console.error); // → "C failed"

// Promise.allSettled
const tasks = [
  Promise.resolve("✔️ Success 1"),
  Promise.reject("❌ Error 2"),
  Promise.resolve("✔️ Success 3")
];
Promise.allSettled(tasks).then(results => {
  results.forEach(r => {
    if (r.status === "fulfilled") {
      console.log("✅", r.value);
    } else {
      console.log("⚠️", r.reason);
    }
  });
});

//Promise.race
const slow = new Promise(res => setTimeout(() => res("slow"), 2000));
const fast = new Promise(res => setTimeout(() => res("fast"), 100));
Promise.race([slow, fast]).then(console.log); // → "fast"

// Promise.any
const p1 = Promise.reject("Fail 1");
const p2 = Promise.reject("Fail 2");
const p3 = Promise.resolve("Success!");
Promise.any([p1, p2, p3])
  .then(console.log)      // → "Success!"
  .catch(console.error);  // Only if all fail

// Use with Timeout Utility
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("⏱️ Timeout"), ms)
  );
  return Promise.race([promise, timeout]);
}
// Fallback APIs (in Priority Order)
function fetchFromPrimary() {
  return fetch("https://primary-api.com/data")
    .then(res => {
      if (!res.ok) throw new Error("Primary failed");
      return res.json();
    });
}
function fetchFromBackup() {
  return fetch("https://backup-api.com/data")
    .then(res => {
      if (!res.ok) throw new Error("Backup failed");
      return res.json();
    });
}
async function fetchWithFallback() {
  try {
    const data = await fetchFromPrimary();
    console.log("✅ Got data from Primary");
    return data;
  } catch (e1) {
    console.warn("Primary failed:", e1.message);
    try {
      const fallbackData = await fetchFromBackup();
      console.log("✅ Got data from Backup");
      return fallbackData;
    } catch (e2) {
      console.error("Both APIs failed:", e2.message);
      throw new Error("❌ No data from any source");
    }
  }
}

fetchWithFallback();

// Retry Wrapper with Fallback List
async function tryFallbacks(urls) {
  for (let url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${url} failed`);
      console.log(`✅ Fetched from ${url}`);
      return await res.json();
    } catch (err) {
      console.warn(`⚠️ Failed at ${url}:`, err.message);
    }
  }
  throw new Error("All fallback sources failed");
}

const sources = [
  "https://primary-api.com/data",
  "https://backup1-api.com/data",
  "https://backup2-api.com/data"
];

tryFallbacks(sources).then(console.log).catch(console.error);
// Closures & Private State
function counter() {
  let count = 0;
  return {
    inc: () => ++count,
    dec: () => --count,
    get: () => count
  };
}
const c = counter();
c.inc(); c.inc();
console.log(c.get()); // 2 (private!)

// Memoization (Caching function results)
function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (arg in cache) return cache[arg];
    return cache[arg] = fn(arg);
  };
}

const slowSquare = memoize(x => {
  console.log("Calculating...");
  return x * x;
});

console.log(slowSquare(4)); // logs "Calculating...", 16
console.log(slowSquare(4)); // cached: 16

 // Custom Event System
class EventBus {
  constructor() {
    this.events = {};
  }
  on(event, cb) {
    (this.events[event] ||= []).push(cb);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(cb => cb(data));
  }
}
const bus = new EventBus();
bus.on("order", data => console.log("Order received:", data));
bus.emit("order", { table: 5, total: 200 });

//Function Composition
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const double = x => x * 2;
const square = x => x * x;
const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // (3*2)^2 = 36

// Proxy (Meta-programming)
const obj = {
  name: "Taj",
};
const watched = new Proxy(obj, {
  get(target, key) {
    console.log(`🔍 Getting ${key}`);
    return target[key];
  },
  set(target, key, value) {
    console.log(`📝 Setting ${key} = ${value}`);
    target[key] = value;
    return true;
  }
});
watched.name;
watched.age = 30;

// Module Pattern (IIFE + Closure)
const AuthModule = (function () {
  let token = null;
  return {
    login(user) {
      token = `auth-token-for-${user}`;
      console.log("Logged in:", token);
    },
    getToken() {
      return token;
    }
  };
})();
AuthModule.login("taj");
console.log(AuthModule.getToken()); // secure access 

// Stack (LIFO: Last In, First Out)
class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
const s = new Stack();
s.push(10); s.push(20);
console.log(s.pop()); // 20

// Queue (FIFO: First In, First Out)
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) this.adjList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1); // bidirectional
  }

  display() {
    for (let vertex in this.adjList) {
      console.log(vertex, "→", this.adjList[vertex].join(", "));
    }
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B");
g.addEdge("A", "C");

g.display();
// A → B, C
// B → A
// C → A
//Graph (Adjacency List)
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) this.adjList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1); // bidirectional
  }

  display() {
    for (let vertex in this.adjList) {
      console.log(vertex, "→", this.adjList[vertex].join(", "));
    }
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B");
g.addEdge("A", "C");

g.display();
// A → B, C
// B → A
// C → A
//Breadth-First Search (BFS)
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log("Visited:", node);
      visited.add(node);
      graph.adjList[node].forEach(n => {
        if (!visited.has(n)) queue.push(n);
      });
    }
  }
}
//Currying & Partial Application
function curry(fn) { return a => b => fn(a, b); }
//Microtasks vs Macrotasks
console.log("Start");

setTimeout(() => console.log("Macrotask: Timeout"), 0);

Promise.resolve()
  .then(() => console.log("Microtask: Promise 1"))
  .then(() => console.log("Microtask: Promise 2"));

console.log("End");

const ok = true;
const prms = new Promise((resolve, reject)=>{
    
    if(ok){
        resolve("OK")
    } else{
        reject("Fail")
    }
});

prms
  .then(result => console.log("Resolved:", result))
  .catch(error => console.log("Rejected:", error));

Promise async/await

async function fetchData(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        console.log(data);
    }catch(err){
        console.error(err)
    }
}
fetchData();

// SetTimeout vs Promise Timing (Microtask vs Macrotask)
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Custom Retry Logic (important!)
async function retry(fn, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
    }
  }
}
retry(() => fetch("https://unstable-api.com"));

// Quick Async MCQ (self-check)
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");






