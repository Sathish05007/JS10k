// 1. Merge nums1 and nums2
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const mergedNums = [...nums1, ...nums2];
console.log("Merged Array:", mergedNums); 
// Output: [1, 2, 3, 4, 5, 6]

// 2. Copy colors and add one extra
const colors = ["red", "green", "blue"];
const newColors = [...colors, "yellow"];
console.log("New Colors:", newColors);
// Output: ["red", "green", "blue", "yellow"]

// 3. Combine [1,2,3] and [4,5,6]
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined Array:", combined);
// Output: [1,2,3,4,5,6]


// 1. Add college property
const student = { name: "Sathish", course: "MERN" };
const updatedStudent = { ...student, college: "VITB" };
console.log(updatedStudent);
// Output: { name: "Sathish", course: "MERN", college: "VITB" }

// 2. Combine {a:1,b:2} and {c:3,d:4}
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);
// Output: { a: 1, b: 2, c: 3, d: 4 }

// 3. Clone and update car
const car = { brand: "Toyota", color: "Red" };
const newCar = { ...car, color: "Blue" };
console.log(newCar);
// Output: { brand: "Toyota", color: "Blue" }


// 1. Destructure ["HTML", "CSS", "JS"]
const skills = ["HTML", "CSS", "JS"];
const [html, css, js] = skills;
console.log(html, css, js); 
// Output: HTML CSS JS

// 2. Swap two numbers
let a = 5, b = 10;
[a, b] = [b, a];
console.log("a =", a, "b =", b); 
// Output: a = 10 b = 5

// 3. Extract 1st and 3rd elements
const numbers = [10, 20, 30, 40];
const [first, , third] = numbers;
console.log(first, third); 
// Output: 10 30


// 1. Destructure book
const book = { title: "JS Basics", author: "Sathish", year: 2025 };
const { title, author, year } = book;
console.log(title, author, year); 
// Output: JS Basics Sathish 2025

// 2. Extract name and age
const person = { name: "Ram", age: 22, city: "Hyd" };
const { name, age } = person;
console.log(name, age); 
// Output: Ram 22

// 3. Nested object destructuring
const studentObj = {
  name: "Anil",
  marks: { math: 85, science: 90 }
};
const { marks: { math, science } } = studentObj;
console.log(math, science); 
// Output: 85 90


// 1. Check even or odd (ternary)
const num = 7;
const result = num % 2 === 0 ? "Even" : "Odd";
console.log(result); 
// Output: Odd

// 2. Assignment operators
let x = 10;
x += 5; // x = 15
x *= 2; // x = 30
console.log(x); 
// Output: 30

// 3. Compare two numbers
const p = 15, q = 20;
console.log(p > q);  // false
console.log(p < q);  // true
console.log(p === q); // false

// 4. Logical operators
const a1 = true, b1 = false;
console.log(a1 && b1); // false
console.log(a1 || b1); // true
console.log(!a1);      // false

// 5. typeof operator
console.log(typeof 123);        // "number"
console.log(typeof "Sathish");  // "string"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"


