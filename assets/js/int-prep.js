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

// Closure-Based createCounter
function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const counter = createCounter();
for(var i=0; i<3; i++){
    console.log(counter());
}

// Return an object with methods:
function createCounter(){
    let count = 0;
    return{
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        reset: function(){
            count = 0;
            return count;
        },
        getCount: function(){
            return count;
        }
    };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.getCount());
