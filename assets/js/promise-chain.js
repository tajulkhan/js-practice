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



