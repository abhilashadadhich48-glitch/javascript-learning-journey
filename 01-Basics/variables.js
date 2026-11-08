
// JAVASCRIPT VARIABLES

// What are Variables?
// Variables are containers used to store data.
// We can access and use stored values whenever needed.


// 1. WAYS TO DECLARE VARIABLES

// JavaScript has three ways to declare variables:
// 1. var
// 2. let
// 3. const


// A. var

// var is the old way of declaring variables.
// We can reassign and redeclare var variables.
// var is function-scoped.

var name = "Abhilasha";
var name = "Aditi";

name = "Priya";

console.log(name); // Priya


// B. let

// let is used to declare variables.
// We can reassign let variables.
// We cannot redeclare let in the same scope.
// let is block-scoped.

let age = 22;
age = 23;

console.log(age); // 23


// C. const

// const is used to declare variables
// whose bindings cannot be reassigned.
// We cannot redeclare const in the same scope.
// const is block-scoped.
// A value must be assigned during declaration.

const country = "India";

console.log(country); // India

// country = "USA"; // Error


// 2. DIFFERENCE BETWEEN var, let AND const

// var:
// - Can be redeclared
// - Can be reassigned
// - Function-scoped

// let:
// - Cannot be redeclared in same scope
// - Can be reassigned
// - Block-scoped

// const:
// - Cannot be redeclared in same scope
// - Cannot be reassigned
// - Block-scoped


// 3. VARIABLE DECLARATION AND INITIALIZATION

// Declaration means creating a variable.

let city;

// Initialization means assigning a value.

city = "Jaipur";

// Declaration and initialization together.

let course = "JavaScript";

console.log(city);
console.log(course);


// 4. RULES FOR NAMING VARIABLES

// 1. Variable names can start with letters, _ or $.
// 2. Variable names cannot start with numbers.
// 3. Spaces are not allowed.
// 4. JavaScript keywords cannot be used.
// 5. Variable names are case-sensitive.

// Valid variable names:

let firstName = "Abhilasha";
let _myAge = 22;
let $price = 100;

// Invalid variable names:

// let 1name = "Abhi";
// let first name = "Abhi";


// 5. CASE SENSITIVITY

// JavaScript is case-sensitive.
// Name and name are different variables.

let Name = "Abhilasha";
let nameValue = "Aditi";

console.log(Name);
console.log(nameValue);


// 6. REASSIGNMENT

// Reassignment means changing an existing variable's value.

let favouriteColor = "Blue";
favouriteColor = "Pink";

console.log(favouriteColor); // Pink


// 7. CONST WITH ARRAYS AND OBJECTS

// const prevents reassignment of the variable.
// But arrays and objects can still be modified.

const fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);

// fruits = ["Orange"]; // Error


// 8. PRACTICE QUESTIONS - SOLUTIONS

// Q1. Declare a variable using let and store your name.

let myName = "Abhilasha";


// Q2. Declare a const variable and store your country.

const myCountry = "India";


// Q3. Create a variable and change its value.

let favouriteFood = "Pizza";
favouriteFood = "Momos";

console.log(favouriteFood);


// Q4. Create two variables and print their sum.

let num1 = 10;
let num2 = 20;

console.log(num1 + num2); // 30


// Q5. Create a variable storing your age
// and check its data type.

let myAge = 22;

console.log(typeof myAge); // number


// Q6. Declare a variable without assigning a value.

let myCourse;

console.log(myCourse); // undefined


// Q7. Create a const variable storing your favourite city.

const favouriteCity = "Jaipur";

console.log(favouriteCity);
