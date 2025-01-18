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
