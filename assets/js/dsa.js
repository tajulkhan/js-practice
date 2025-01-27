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

