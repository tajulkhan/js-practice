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
