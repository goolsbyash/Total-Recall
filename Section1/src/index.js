//* Section 1: Variables & Data Types

// Exercise A: Variables
const myName = "Ashley Goolsby";
let favoriteLanguage = "Python";
let newFavoriteLanguage = "JavaScript";
favoriteLanguage = newFavoriteLanguage;

console.log(
  `Hi! My name is ${myName} and my favorite programming language is ${favoriteLanguage}.`
);
console.log("=========================");

// Exercise B: Strings
let firstVariable = "Hello World";
firstVariable = 626;
let secondVariable = firstVariable;
secondVariable = "Houston, do we have a problem?";

console.log(firstVariable);

let yourName = "Ashley Goolsby";
console.log("Hello, my name is " + yourName + ".");

console.log("=========================");

// Exercise C: Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a < b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

console.log("=========================");

// Exercise D: The Farm

let animal = "cow";

// Condition is false if the case is different
// ex. animal = 'coW' != 'cow';
// We may learn later how to best handle this
// scenario

// adding 'COW' to condition too
if (animal === "cow" || animal === "COW") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

console.log("=========================");

// Exercise E: Driver's Ed

let driverAge = 15;

if (driverAge >= 16) {
  console.log("Here are the keys!");
} else if (driverAge >= 0) {
  console.log("Sorry, you're too young.");
} else {
  console.log("Enter age as a positive number.");
}

console.log("=========================");

//* Section 2: Loops

// Exercise A: The Basics

// print all nums 0- 10 inclusive
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// print all nums 10 - 400 inclusive
for (let i = 10; i <= 400; i++) {
  console.log(i);
}

// print every 3rd num starting at 12 up to 4000
for (let i = 12; i < 4000; i += 3) {
  console.log(i);
}

console.log("=========================");

// Exericse B: Get Even

// print all nums 1- 100 and add message for even nums
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } else if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  }
}

console.log("=========================");

// Exercise C: Give Me Five

for (let i = 0; i <= 100; i++) {
  
  if ((i % 15 === 0)) {
    console.log(`I found a ${i}. Three is a crowd.`);
    console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0){
    console.log(`I found a ${i}. Three is a crowd.`);
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  } else {
    continue;
  }
}

console.log("=========================");


// Exercise D: Savings Account

let bank_account = 0;
let bank_account2 = 0;

for (let i = 1; i <= 10; i++) {
    bank_account += i;
}

// Calculate pay with bonus
for (let i = 1; i <= 100; i++) {
    bank_account2 += i;
}
bank_account2 *= 2;

console.log(`Your bank account should have $${bank_account} in it.`);
console.log(`With the bonus, your bank account should have $${bank_account2} in it.`);

console.log("=========================");


//* Section 3

// Exercise A: Talk about it in your group
// no coding required for this exercise

// Exercise B: Easy Does It

// Create array called quotes that contains 3 quotes
let quotes = ['\"First, solve the problem. Then, write the code.\"', '\"Happiness is an inside job.\"', '\"Whatever you are, be a good one.\"'];

console.log(quotes);

console.log("=========================");

// Exercise C: Accessing Elements

const randomThings = [1, 10, "Hello", true];

// How to access 1st element
console.log(randomThings[0]);

// Change "Hello" to "World"
randomThings[2] = "World";

// Check value has been changed
console.log(randomThings[2]);  // specific index
console.log(randomThings);     // entire array

console.log("=========================");

// Exercise D: Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// How to access 3rd element
console.log(ourClass[2]);

// Change value of "GitHub" to "Octocat"
ourClass[4] = "Octocat";

// Add new element "Cloud City"

// Option 1:
ourClass.push("Cloud City");

// Option 2:
// ourClass[5] = "Cloud City";

console.log(ourClass);

console.log("=========================");
