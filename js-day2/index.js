// 1. Declare a variable to store your name and print it
let name = "Sathish";
console.log("1. Name:", name);

// 2. Declare variables using var, let, and const
var age = 25;          // function-scoped
let city = "Hyderabad"; // block-scoped
const PI = 3.14;       // constant
console.log("2. Age, City, PI:", age, city, PI);

// 3. Number variable operations
let num = 10;
console.log("3. Addition:", num + 5);
console.log("3. Subtraction:", num - 3);
console.log("3. Multiplication:", num * 2);
console.log("3. Division:", num / 5);

// 4. String length
let greeting = "Hello World";
console.log("4. String length:", greeting.length);

// 5. Boolean variable
let isActive = true;
console.log("5. Boolean value:", isActive);

// 6. Null and Undefined
let empty = null;
let notAssigned;
console.log("6. Null:", empty);
console.log("6. Undefined:", notAssigned);

// 7. Array of 5 elements, first and last
let arr = [10, 20, 30, 40, 50];
console.log("7. First element:", arr[0]);
console.log("7. Last element:", arr[arr.length - 1]);

// 8. Object properties
let person = {name: "Sathish", age: 25, city: "Hyderabad"};
console.log("8. Name:", person.name);
console.log("8. Age:", person.age);
console.log("8. City:", person.city);

// 9. Concatenate two strings
let firstName = "Sathish";
let lastName = "Ejjagiri";
let fullName = firstName + " " + lastName;
console.log("9. Full Name:", fullName);

// 10. Check data type using typeof
let numberVar = 42;
let stringVar = "Hello";
let booleanVar = true;
console.log("10. Type of numberVar:", typeof numberVar);
console.log("10. Type of stringVar:", typeof stringVar);
console.log("10. Type of booleanVar:", typeof booleanVar);
