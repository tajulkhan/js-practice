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
