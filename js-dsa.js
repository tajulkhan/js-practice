//Parse URL Query Params to Object
function parseQuery(queryString) {
  const result = {};
  queryString = queryString.startsWith("?") ? queryString.slice(1) : queryString;

  const pairs = queryString.split("&");

  for (let pair of pairs) {
    let [key, value] = pair.split("=");
    result[decodeURIComponent(key)] = decodeURIComponent(value || "");
  }

  return result;
}

console.log(parseQuery("?name=Taj&role=dev&city=Chennai"));

//Convert CSV to JSON
//input 
name,age,city
Taj,28,Chennai
John,32,Bangalore
//output
[
  { name: "Taj", age: "28", city: "Chennai" },
  { name: "John", age: "32", city: "Bangalore" }
]

function csvToJson(csv) {
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map(line => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((header, i) => {
      obj[header.trim()] = values[i].trim();
    });
    return obj;
  });
}

const inputCSV = `name,age,city
Taj,28,Chennai
John,32,Bangalore`;

console.log(csvToJson(inputCSV));

//Deep Merge of Two JSON Objects
function deepMerge(target, source) {
  for (let key in source) {
    if (
      typeof source[key] === "object" &&
      source[key] !== null &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const obj1 = {
  user: { name: "Taj", age: 28 },
  settings: { darkMode: true }
};

const obj2 = {
  user: { age: 29 },
  settings: { notifications: true }
};

console.log(deepMerge({ ...obj1 }, obj2));

/*
{
  user: { name: 'Taj', age: 29 },
  settings: { darkMode: true, notifications: true }
}
*/

//Deep Diff Between Two JSON Objects

function deepDiff(obj1, obj2) {
  let diff = {};

  for (let key in obj1) {
    if (!(key in obj2)) {
      diff[key] = { removed: obj1[key] };
    } else if (
      typeof obj1[key] === "object" &&
      typeof obj2[key] === "object" &&
      obj1[key] !== null &&
      obj2[key] !== null
    ) {
      const nested = deepDiff(obj1[key], obj2[key]);
      if (Object.keys(nested).length) diff[key] = nested;
    } else if (obj1[key] !== obj2[key]) {
      diff[key] = { from: obj1[key], to: obj2[key] };
    }
  }

  for (let key in obj2) {
    if (!(key in obj1)) {
      diff[key] = { added: obj2[key] };
    }
  }

  return diff;
}

const before = {
  name: "Taj",
  age: 28,
  address: { city: "Chennai", pin: 600001 }
};

const after = {
  name: "Taj",
  age: 29,
  address: { city: "Chennai", pin: 600002, area: "Anna Nagar" }
};

console.log(deepDiff(before, after));

/*
{
  age: { from: 28, to: 29 },
  address: {
    pin: { from: 600001, to: 600002 },
    area: { added: 'Anna Nagar' }
  }
}
*/

//Email Validator (Regex + Realistic Check)
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return regex.test(email);
}

console.log(isValidEmail("taj@example.com")); // true
console.log(isValidEmail("taj@.com")); // false

//Phone Number Validator (Indian Format Example)

function isValidPhone(phone) {
  const cleaned = phone.replace(/\D/g, ""); // strip non-digits
  return /^(\+91|91)?[6-9]\d{9}$/.test(cleaned);
}

console.log(isValidPhone("9876543210"));     // true
console.log(isValidPhone("+919876543210"));  // true
console.log(isValidPhone("12345"));          // false

//Password Strength Validator
function isStrongPassword(pw) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(pw);
}

console.log(isStrongPassword("Taj@1234"));  // true
console.log(isStrongPassword("taj123"));    // false

//Validate All Together

function validateForm({ email, phone, password }) {
  return {
    email: isValidEmail(email),
    phone: isValidPhone(phone),
    password: isStrongPassword(password)
  };
}

// PAN Number Validator
function isValidPAN(pan) {
  return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);
}

console.log(isValidPAN("ABCDE1234F")); // true
console.log(isValidPAN("abcde1234f")); // false

//Aadhaar Number Validator
function isValidAadhaar(aadhaar) {
  return /^[2-9]{1}[0-9]{11}$/.test(aadhaar);
}

console.log(isValidAadhaar("234567890123")); // true
console.log(isValidAadhaar("012345678901")); // false

// Indian Date Format Validator (DD-MM-YYYY)
function isValidDate(dateStr) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](19|20)\d\d$/;
  return regex.test(dateStr);
}

console.log(isValidDate("19-04-2025")); // true
console.log(isValidDate("32-13-2025")); // false

//GSTIN Validator (Indian GST Number)
function isValidGSTIN(gstin) {
  return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(gstin);
}

console.log(isValidGSTIN("29ABCDE1234F1Z5")); // true
console.log(isValidGSTIN("ABCDE1234F1Z5"));   // false

//Combine All Validators into a Utility
const Validators = {
  email: isValidEmail,
  phone: isValidPhone,
  password: isStrongPassword,
  pan: isValidPAN,
  aadhaar: isValidAadhaar,
  date: isValidDate,
  gstin: isValidGSTIN
};

// Example usage:
console.log(Validators.pan("ABCDE1234F")); // true

// Flatten a Nested Array (Recursive & FlatMap)
function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]

// Throttle / Debounce Function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Count Frequency of Items in Array
function countFrequencies(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

console.log(countFrequencies(['a', 'b', 'a', 'c', 'b', 'a']));
// { a: 3, b: 2, c: 1 }

 // Check for Anagrams
function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true

// Reverse Words in a Sentence
function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords("hello world from Taj")); // "Taj from world hello"


