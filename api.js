// Boosting API Performance with Parallel Requests!
// Instead of calling APIs one by one (which is slow and inefficient), I implemented a smarter solution using Promise.all() to fetch multiple product details simultaneously from the Fake Store API.
// ✅ Faster execution ✅ Cleaner code ✅ Better user experience

const apiEndPoints = [
"https://fakestoreapi.com/products/1",
"https://fakestoreapi.com/products/2",
"https://fakestoreapi.com/products/3",
"https://fakestoreapi.com/products/4",
"https://fakestoreapi.com/products/5"

];
const fetchProductData = async (urls) => {
    try{
        const response = await Promise.all(
            urls.map(async(url)=>{
                const res = await fetch(url);
                if(!res.ok){
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
        );
        console.log(response);

    } catch(e){
        console.log(e);
    }
};
fetchProductData(apiEndPoints);
// debugger js
function test() {
    let n = 42;
    debugger;
    console.log(n);
}
test();

let arr = [10, 20, 30, 40];
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}
let x = 5
for (let i = 1; i <= 10; i++) {
  console.log(x * i); 
}
// Updating Counter Variable
const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {
    gfg += subjects[i];
    //can be increased inside loop
    i++;
}
console.log(gfg)
