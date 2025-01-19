async function fetchSequentialData() {
    const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postData.json();
  
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${posts[0].userId}`);
    const user = await userData.json();
    console.log(user);
    
  
    console.log(user.name);
  }
  
  fetchSequentialData();  

  var x = 220;
var y = "Hello";
var z = undefined;
        
// x | | y    // Returns 220 since the first value is truthy
        
// x | | z   // Returns 220 since the first value is truthy
        
// x && y    // Returns "Hello" since both the values are truthy
        
// y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}

const set = new Set([1, 2, 3, 3]);
console.log(set); // Set { 1, 2, 3 }

const map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // 'value'

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;  // Skips when i equals 5
  if (i === 8) break;     // Breaks the loop when i equals 8
  console.log(i);         // Outputs 0, 1, 2, 3, 4, 6, 7
}

async function fetchData() {
  const urls = ['url1', 'url2', 'url3'];
  for (const url of urls) {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
  }
}
// Finding the Maximum/Minimum Value in an Array
const numbers = [3, 1, 4, 1, 5, 9];
const max = Math.max(...numbers); 
const min = Math.min(...numbers); 
console.log(max); 
console.log(min); 


// Reversing an Array
const arr = [1, 2, 3, 4];
const reversedArr = arr.reverse();
console.log(reversedArr);

// Checking if a String is a Palindrome
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

// To sort an array in ascending order
const arrSorting = [5, 3, 8, 1];
arrSorting.sort((a, b)=> a-b);
console.log(arrSorting);

// Removing Duplicates from an Array
const arrDup = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arrDup)]
console.log(uniqueArr); 
