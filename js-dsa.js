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


