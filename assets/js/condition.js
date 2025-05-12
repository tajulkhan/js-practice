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
