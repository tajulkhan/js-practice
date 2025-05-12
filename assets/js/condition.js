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




