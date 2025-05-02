// A closure is when a function “remembers” variables from its lexical scope even when that function is executed outside of that scope.

// Closures (Base-Level  Concept)
function outer(){
    let counter = 0;
    return function inner(){
        counter ++;
        console.log(counter);
    }
}
const fn = outer();
fn();
fn();

// Modify the code using a closure to print 0 1 2.
for(var i = 0; i < 3; i++){
    (function(i){
        setTimeout(()=> console.log(i))
    })(i)
}
// Modern Alternative with let (Block Scope Fix):
for(let i =0; i < 3; i++){
    setTimeout(()=> console.log(i));
}
