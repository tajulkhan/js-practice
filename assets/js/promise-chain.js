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


