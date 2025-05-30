// Mastering async loops + clean error handling in for, forEach, and map.
const urls = ['url1', 'url2', 'url3'];
urls.forEach(async (url) => {
  const res = await fetch(url);   
  const data = await res.json();
  console.log(data);
});
// ❌ this won't wait!

// Solution: Use for...of + await
async function fetchInOrder(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("✅", data);
    } catch (err) {
      console.error("❌ Failed:", err.message);
    }
  }
}
// What if you want parallel fetch?
async function fetchInParallel(urls) {
  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url);
        return res.json();
      })
    );
    console.log("✅ All done:", results);
  } catch (err) {
    console.error("❌ At least one failed:", err.message);
  }
}
//Custom Retry Inside Loop
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Bad response");
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.warn(`Retrying ${url} (${i + 1})...`);
    }
  }
}

async function fetchUrlsWithRetries(urls) {
  for (const url of urls) {
    try {
      const data = await fetchWithRetry(url);
      console.log("✅ Success:", data);
    } catch (err) {
      console.error("❌ Final fail for", url, ":", err.message);
    }
  }
}

// map(...).catch(...) with Promise.all (for partial success)
const urls = ['url1', 'url2', 'url3'];
const promises = urls.map((url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.warn(`❌ Failed for ${url}: ${err.message}`);
      return null; // fallback value
    })
);
Promise.all(promises).then((results) => {
  console.log("✅ Partial results:", results); // some may be null
});

// Promise.allSettled() (show success + failure explicitly)
const promises = urls.map((url) => fetch(url).then(res => res.json()));
Promise.allSettled(promises).then((results) => {
  results.forEach((result, idx) => {
    if (result.status === "fulfilled") {
      console.log(`✅ [${idx}]`, result.value);
    } else {
      console.warn(`❌ [${idx}]`, result.reason.message);
    }
  });
});

// Mix .map() + async/await inside loop (if you need more logic)
const fetchWithHandler = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return null;
  }
};
const promises = urls.map(fetchWithHandler);
Promise.all(promises).then((results) => {
  console.log("Results:", results);
});

const userUrls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/9999",  // non-existent
  "https://jsonplaceholder.typicode.com/users/3"
];
const fetchUsers = async () => {
  const userPromises = userUrls.map((url) =>
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .catch((err) => {
        console.warn(`❌ Failed to fetch ${url}: ${err.message}`);
        return null; // fallback for that item
      })
  );

  const users = await Promise.all(userPromises);
  const validUsers = users.filter((u) => u !== null);

  console.log("✅ Valid users:", validUsers);
};

fetchUsers();
// map with Retry
const fetchWithRetry = async (url, retries = 2) => {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed fetch");
      return await res.json();
    } catch (err) {
      if (i === retries) {
        console.warn(`❌ Final fail for ${url}`);
        return null;
      }
      console.log(`🔁 Retrying ${url} (${i + 1})`);
    }
  }
};

const usersWithRetry = async () => {
  const promises = userUrls.map((url) => fetchWithRetry(url, 2));
  const users = await Promise.all(promises);
  console.log(users.filter(Boolean));
};
usersWithRetry();

 // Simulated setup (provided for you):
function fakeOrderApi(orderId) {
  return new Promise((resolve, reject) => {
    const succeed = Math.random() > 0.3; // 70% chance of success
    setTimeout(() => {
      succeed ? resolve(`Order ${orderId} processed`) : reject(new Error(`Failed ${orderId}`));
    }, 500);
  });
}

// once() Function (Closure + Control)
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}
//usage
const init = once(() => {
  console.log("Initialized");
  return 42;
});

console.log(init()); // Initialized → 42
console.log(init()); // (nothing) → 42
console.log(init()); // (nothing) → 42

// Higher-Order Function Array.map()
const nums = [1, 2, 3, 4, 5];
double = nums.map(num=> num * 2);
console.log(double);
//setTimeout Takes a function as a parameter — also a HOF.
setTimeout(()=>{
    console.log("Hii")
}, 1500)
// JavaScript Recursion Program to countdown till 1
// recursive function
function counter(count) {
    // display count
    console.log(count);
    // condition for stopping
    if(count > 1) {
        // decrease count
        count = count - 1;
        // call counter with new value of count
        counter(count);
    } else {
        // terminate execution
        return;
    };
};
// access function
counter(5);

// (before vs after): 
// Normal function
function add(a, b){
    return a + b;
}
console.log(add(1, 2))

// (before vs after): Curried version
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}
console.log(curriedAdd(2)(3))

//General Currying Function: 
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}
// Usage:
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24

// Reusability via Partial Application 
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2); 
console.log(double(5)); 

// With currying
const curriedMultiply = a => b => a * b;
const double = curriedMultiply(2);
console.log(double(5)); 

// Composability
const add = a => b => a + b;
const increment = add(1);
console.log(increment(4)); // 5

// Cleaner Declarative Code true
const withRole = role => user => user.role === role;
const isAdmin = withRole("admin");
console.log(isAdmin({ name: "Taj", role: "admin" })); // true

// Cleaner Declarative Code false
const withRole = role => user => user.role === role;
const isAdmin = withRole("admin");
console.log(isAdmin({ name: "Taj", role: "manager" })); // false

// Count Occurrences in Array → Store in Object
function countOccurrences(arr) {
  const count = {};
  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}
console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']));
// { a: 3, b: 2, c: 1 }

// Group People by Age
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
];
function groupByAge(people) {
  const grouped = {};
  for (let person of people) {
    const { age } = person;
    if (!grouped[age]) grouped[age] = [];
    grouped[age].push(person);
  }
  return grouped;
}
console.log(groupByAge(people));
/*
{
  20: [{ name: 'Bob', age: 20 }],
  30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
}
*/
// Swap Object Keys and Values
function swapKeysAndValues(obj) {
  const swapped = {};
  for (let key in obj) {
    swapped[obj[key]] = key;
  }
  return swapped;
}
console.log(swapKeysAndValues({ a: 1, b: 2 }));
// { 1: "a", 2: "b" }

// Merge Two Objects with Overlapping Keys
function mergeWithSum(obj1, obj2) {
  const result = { ...obj1 };

  for (let key in obj2) {
    result[key] = (result[key] || 0) + obj2[key];
  }

  return result;
}
console.log(mergeWithSum({ a: 1, b: 2 }, { b: 3, c: 4 }));
// { a: 1, b: 5, c: 4 }
// Print All Keys and Values in an Object
const user = { name: 'Taj', age: 25, city: 'Dubai' };

for (let key in user) {
  console.log(key, "→", user[key]);
}
// name → Taj
// age → 25
// city → Dubai
// Add 1 to All Values in an Object (number values)
const scores = { math: 80, science: 70, english: 90 };
function addOne(obj) {
  for (let key in obj) {
    obj[key] = obj[key] + 1;
  }
  return obj;
}
console.log(addOne(scores));
// { math: 81, science: 71, english: 91 }

// Count Keys in an Object
function countKeys(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}
console.log(countKeys({ a: 1, b: 2, c: 3 }));
// 3
l


