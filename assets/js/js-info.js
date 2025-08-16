// Javascript info practice code 
let students = {
  Asha: { math: 92, science: 85, english: 78 },
  Ravi: { math: 55, science: 62, english: 60 },
  Tom: { math: 88, science: 90, english: 95 }
};

for (let student in students) {
  let subjects = students[student];
  let total = 0;
  let pass = true;

  for (let subject in subjects) {
    let score = subjects[subject];
    total += score;

    if (score < 40) { // Fail in any subject
      pass = false;
    }
  }


  
  let average = total / Object.keys(subjects).length;

  if (!pass) {
    console.log(`${student} has FAILED in one or more subjects`);
  } else if (average >= 90) {
    console.log(`${student} is a Topper with Average: ${average}`);
  } else if (average >= 60) {
    console.log(`${student} passed with Average: ${average}`);
  } else {
    console.log(`${student} barely passed with Average: ${average}`);
  }
}

// Count word occurrences in a sentence
let sentence = "the cat and the dog chased the cat";
// Step 1: Split into words
let words = sentence.split(" ");
// Step 2: Create an empty object
let wordCount = {};
// Step 3: Loop & count
for (let word of words) {
  if (wordCount[word]) {
    wordCount[word]++;  // if word already exists, increase count
  } else {
    wordCount[word] = 1; // else initialize with 1
  }
}
// Step 4: Display results
console.log(wordCount);
