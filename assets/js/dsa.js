const events = [
    { today: {} },
    { tomorrow: {} },
    { yesterday: {} }
];
console.log(events);

if (
  Object.keys(events[0].today).length === 0 &&
  Object.keys(events[1].tomorrow).length === 0 &&
  Object.keys(events[2].yesterday).length === 0
) {
  console.log("Empty");
} else {
  console.log("The evnet available");
}


const mixedArray = [[], {}, {}];

if (Array.isArray(mixedArray[0]) && mixedArray[0].length === 0) {
  console.log("First element is an empty array"); 
}

if (typeof mixedArray[1] === "object" && !Array.isArray(mixedArray[1]) && Object.keys(mixedArray[1]).length === 0) {
  console.log("Second element is an empty object");
}

if (typeof mixedArray[2] === "object" && !Array.isArray(mixedArray[2]) && Object.keys(mixedArray[2]).length === 0) {
  console.log("Third element is an empty object");
}
