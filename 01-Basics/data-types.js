// JAVASCRIPT DATA TYPES


// What are Data Types?
// Data types define what kind of value a variable stores.
// JavaScript has two main categories of data types:
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types


// ==========================================
// 1. PRIMITIVE DATA TYPES
// ==========================================

// Primitive data types store single values.

// 1. String
// Used to store text.
// Strings are written inside quotes.

let name = "Abhilasha";
let city = 'Jaipur';


// 2. Number
// Used to store integers and decimal numbers.

let age = 22;
let price = 99.99;


// 3. Boolean
// Stores only true or false values.

let isStudent = true;
let isWorking = false;


// 4. Undefined
// A variable declared but not assigned a value
// has the value undefined.

let course;
console.log(course);


// 5. Null
// Represents an intentional absence of a value.

let selectedValue = null;


// 6. BigInt
// Used to store very large integers.

let bigNumber = 12345678901234567890n;


// 7. Symbol
// Used to create unique identifiers.

let id = Symbol("id");


// ==========================================
// 2. NON-PRIMITIVE DATA TYPES
// ==========================================

// These are also called reference types.

// 1. Object
// Used to store data in key-value pairs.

let student = {
    name: "Abhilasha",
    age: 22,
    city: "Jaipur"
};


// 2. Array
// Used to store multiple values in one variable.

let fruits = ["Apple", "Mango", "Banana"];


// 3. Function
// A function is a reusable block of code.

function greet() {
    console.log("Hello JavaScript!");
}


// ==========================================
// 3. TYPEOF OPERATOR
// ==========================================

// typeof is used to check the data type of a value.

console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof course);     // undefined
console.log(typeof bigNumber);  // bigint
console.log(typeof id);         // symbol
console.log(typeof student);    // object
console.log(typeof fruits);     // object
console.log(typeof greet);      // function

// Note:
// typeof null returns "object".
// This is a historical JavaScript behavior.


// ==========================================
// PRACTICE QUESTIONS - SOLUTIONS
// ==========================================

// Q1. Create a variable storing your name.

let myName = "Abhilasha";


// Q2. Create a variable storing your age.

let myAge = 22;


// Q3. Store true in a variable called isLearning.

let isLearning = true;


// Q4. Create an array of 5 favourite foods.

let favouriteFoods = [
    "Pizza",
    "Pasta",
    "Burger",
    "Momos",
    "Dosa"
];


// Q5. Create an object containing your name and city.

let myDetails = {
    name: "Abhilasha",
    city: "Jaipur"
};


// Q6. Use typeof to check the data types
// of all the above variables.

console.log(typeof myName);          // string
console.log(typeof myAge);           // number
console.log(typeof isLearning);      // boolean
console.log(typeof favouriteFoods);  // object
console.log(typeof myDetails);       // object
