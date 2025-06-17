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

// Once data becomes equal to 5 the console.log() 
// statement will be ignored because of the continue keyword.
let data = 7
while(data>=0){
    if (data<=5){
        data--;
        continue;
    }
    console.log(data); //7 6
    data--;
}

// The break statement exits the loop when i === 1,
//  but the console.log executes only for i = 0 before the loop is terminated.
for (let i = 0; i < 3; i++) {
    if (i === 1) break;
    console.log(i); //0
}

// The loop will run till i=6 after which the loop will break as data becomes equal to 30
let i = 5;
while (true) {
    console.log(i); // 5 10 15 20 25 30
    i += 5;
    if (i > 30) {
        break;
    }
}
 // While Loop
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
//Using While Loop to find Traverse an Array
let arr = [10, 20, 30, 40];
let  i =0;
while( i<arr.length){
    console.log(arr[i]);
    i++;
}
// Iterating Over an Array using for...of
const a = [ 1, 2, 3, 4, 5 ];
for(const item of a){
    console.log(item);
}
// Iterating Over a String using for...of
const str = "Hello";
for(const char of str){
    console.log(char);
}
// Iterating Over a Map using for...of
const m = new Map([
    ["name", "Akash"],
    ["age", 25],
    ["city", "Noida"]
]);
for(let [key, value] of m){
    console.log(`${key}: ${value}`);
}
//Iterating Over a Set using for...of
let s = new Set([1, 2, 3, 4, 5]);
for (let val of s) {
    console.log(val);
}
// Iterating Over an Object’s Properties using for...of
let person = {
    name: "Taj",
    age: 24,
    city: "Cbe"
};
for(let key of Object.keys(person)){
    console.log(`${key}: ${person[key]}`);
}
// Break and Continue Statements
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  
    }
    console.log(i);
}

// nested-if statement
let i = 20;

if (i == 10)
    console.log("i is 10");
else if (i == 15)
    console.log("i is 15");
else if (i == 20)
    console.log("i is 20");
else
    console.log("i is not present");
//Return Exiting a Function Early
function checkE(number) {
    if (number % 2 !== 0) {
        return false;
    }
    return true;
}
console.log(checkE(4));
console.log(checkE(5));

// Removing item (ECMA-262 Edition 5 code AKA old style JavaScript)
var value = 3
var arr = [1, 2, 3, 4, 5, 3]
arr = arr.filter(function(item) {
    return item !== value
})
console.log(arr)
// [ 1, 2, 4, 5 ]
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
const array = [2, 5, 9];
console.log(array);
const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array);
// Removing item (ECMAScript 6 code)
let value = 3
let arr = [1, 2, 3, 4, 5, 3]
arr = arr.filter(item => item !== value)
console.log(arr)
// [ 1, 2, 4, 5 ]
// Removing multiple items (ECMAScript 7 code)
let forDeletion = [2, 3, 5]
let arr = [1, 2, 3, 4, 5, 3]
arr = arr.filter(item => !forDeletion.includes(item))
// !!! Read below about array.includes(Intranet exploler) support !!!
console.log(arr)
// [ 1, 4 ]
// JavaScript Array Reference
// Create and initialize an array
let courses = ["HTML", "CSS", "JavaScript", "React"];
console.log(courses);
// Create a new empty array
let newArray = [];
// forEach loop to push elements
// into new array
courses.forEach(function (course) {
    newArray.push(course);
});
console.log(newArray);

// What is the purpose of the try block in JavaScript?
// Ans: To define a block of code to test for errors
// Explanation:
// The try block is used to test code for errors. If an error occurs, control is passed to the catch block.

// What is the purpose of the try block in JavaScript?
// Ans: To define a block of code to test for errors
