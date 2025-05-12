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
