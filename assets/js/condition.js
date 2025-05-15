// Object + for Loop + if...else 
// Mark Students as Passed or Failed
function markPassFail(scores) {
  const result = {};
  for (let student in scores) {
    if (scores[student] >= 40) {
      result[student] = 'Pass';
    } else {
      result[student] = 'Fail';
    }
  }
  return result;
}

console.log(markPassFail({ Alice: 50, Bob: 35, Charlie: 70 }));
// { Alice: 'Pass', Bob: 'Fail', Charlie: 'Pass' }

// Categorize Age Group
function ageCategory(people) {
  const result = {};
  for (let name in people) {
    const age = people[name];
    if (age < 13) {
      result[name] = 'Child';
    } else if (age < 20) {
      result[name] = 'Teen';
    } else {
      result[name] = 'Adult';
    }
  }
  return result;
}
console.log(ageCategory({ John: 12, Anna: 17, Mike: 25 }));
// { John: 'Child', Anna: 'Teen', Mike: 'Adult' }

// Assign Grades Based on Score
function assignGrades(marks) {
  const grades = {};
  for (let student in marks) {
    const score = marks[student];
    if (score >= 90) {
      grades[student] = 'A';
    } else if (score >= 75) {
      grades[student] = 'B';
    } else if (score >= 60) {
      grades[student] = 'C';
    } else {
      grades[student] = 'F';
    }
  }
  return grades;
}
console.log(assignGrades({ Raj: 88, Simran: 95, Aman: 55 }));
// { Raj: 'B', Simran: 'A', Aman: 'F' }

// Tag Employees by Work Hours
function tagByWorkHours(employees) {
  const result = {};
  for (let name in employees) {
    const hours = employees[name];
    if (hours >= 40) {
      result[name] = 'Full-time';
    } else if (hours >= 20) {
      result[name] = 'Part-time';
    } else {
      result[name] = 'Intern';
    }
  }
  return result;
}

console.log(tagByWorkHours({ Ali: 45, Zara: 25, Tom: 10 }));
// { Ali: 'Full-time', Zara: 'Part-time', Tom: 'Intern' }

 // Check Stock Availability
function stockStatus(items) {
  const status = {};
  for (let item in items) {
    if (items[item] === 0) {
      status[item] = 'Out of Stock';
    } else if (items[item] < 5) {
      status[item] = 'Low Stock';
    } else {
      status[item] = 'In Stock';
    }
  }
  return status;
}

console.log(stockStatus({ rice: 10, oil: 2, sugar: 0 }));
// { rice: 'In Stock', oil: 'Low Stock', sugar: 'Out of Stock' }
// Income Tax Slab Labeling
function taxSlab(income) {
  const slab = {};
  for (let person in income) {
    const amt = income[person];
    if (amt > 1000000) {
      slab[person] = 'High';
    } else if (amt > 500000) {
      slab[person] = 'Medium';
    } else {
      slab[person] = 'Low';
    }
  }
  return slab;
}

console.log(taxSlab({ Arun: 450000, Neha: 1200000, Meera: 600000 }));
// { Arun: 'Low', Neha: 'High', Meera: 'Medium' }

// Object + Loop + Condition (Part 3 — Real-Use Logic)
// Mark Products as Discounted or Not
function markDiscounts(products) {
  const result = {};
  for (let name in products) {
    const price = products[name];
    if (price >= 1000) {
      result[name] = 'Discounted';
    } else {
      result[name] = 'Regular Price';
    }
  }
  return result;
}

console.log(markDiscounts({ TV: 1500, Pen: 20, Laptop: 2000 }));
// { TV: 'Discounted', Pen: 'Regular Price', Laptop: 'Discounted' }

// Categorize Products by Price & Stock
function productStatus(products) {
  const result = {};
  for (let name in products) {
    const { price, stock } = products[name];

    if (stock === 0) {
      result[name] = 'Out of Stock';
    } else if (price >= 1000) {
      result[name] = 'Premium Available';
    } else {
      result[name] = 'Regular Available';
    }
  }
  return result;
}

const input = {
  TV: { price: 1200, stock: 10 },
  Pen: { price: 20, stock: 100 },
  Laptop: { price: 2000, stock: 0 },
};

console.log(productStatus(input));
// { TV: 'Premium Available', Pen: 'Regular Available', Laptop: 'Out of Stock' }
// Score Students with if...else + Nested Object
function gradeStudents(students) {
  const result = {};

  for (let name in students) {
    const { marks, attendance } = students[name];

    if (marks >= 90 && attendance >= 90) {
      result[name] = 'Top Performer';
    } else if (marks >= 70) {
      result[name] = 'Good';
    } else {
      result[name] = 'Needs Improvement';
    }
  }

  return result;
}

const input = {
  Asha: { marks: 95, attendance: 95 },
  Ravi: { marks: 80, attendance: 70 },
  Tom: { marks: 60, attendance: 85 },
};

console.log(gradeStudents(input));
// { Asha: 'Top Performer', Ravi: 'Good', Tom: 'Needs Improvement' }
// Functions that are used as an argument to another function are called callback functions
function divideByHalf(sum){
  console.log(Math.floor(sum / 2));
}
function multiplyBy2(sum){
  console.log(sum * 2);
}
function operationOnSum(num1,num2,operation){
  var sum = num1 + num2;
  operation(sum);
}
operationOnSum(3, 3, divideByHalf); // Outputs 3
operationOnSum(5, 5, multiplyBy2); // Outputs 20
