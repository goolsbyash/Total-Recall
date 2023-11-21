// Section 1: Variables & Data Types

// Exercise A: Variables
const myName = 'Ashley Goolsby';
let favoriteLanguage = 'Python';
let newFavoriteLanguage = 'JavaScript';
favoriteLanguage = newFavoriteLanguage;

console.log(`Hi! My name is ${myName} and my favorite programming language is ${favoriteLanguage}.`);
console.log("=========================");

// Exercise B: Strings
let firstVariable = 'Hello World';
firstVariable = 626;
let secondVariable = firstVariable;
secondVariable = 'Houston, do we have a problem?';

console.log(firstVariable);

let yourName = "Ashley Goolsby";
console.log('Hello, my name is ' + yourName + '.');

// Exercise C: Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a < b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


// Exercise D: The Farm

let animal = 'cow';

// Condition is false if the case is different
// ex. animal = 'coW' != 'cow';
// We may learn later how to best handle this 
// scenario

// adding 'COW' to condition too
if ((animal === 'cow') || (animal === 'COW')) {
    console.log('mooooo');
} else {
    console.log('Hey! You\'re not a cow.');
}