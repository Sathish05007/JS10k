// 1️⃣ Round 23.5678 to 2 decimal places using toFixed()
console.log(23.5678.toFixed(2));  
// Output: "23.57"  (returns a string)

// 2️⃣ Convert the string "123.45" into a number using parseFloat()
console.log(parseFloat("123.45"));  
// Output: 123.45  (number type)

// 3️⃣ Convert "50px" into an integer using parseInt()
console.log(parseInt("50px"));  
// Output: 50

// 4️⃣ Check whether 25.0 is an integer
console.log(Number.isInteger(25.0));  
// Output: true

// 5️⃣ Format 12345.6789 to 4 total digits using toPrecision()
console.log(12345.6789.toPrecision(4));  
// Output: "1.235e+4" (scientific notation for 12350)

// 6️⃣ Check if "hello" is NaN
console.log(isNaN("hello"));  
// Output: true  ("hello" cannot be converted to a number)

// 7️⃣ Check if Infinity is finite
console.log(isFinite(Infinity));  
// Output: false

// 8️⃣ Find if 99 is an integer or not
console.log(Number.isInteger(99));  
// Output: true

// 9️⃣ Convert "200.99" into both integer and float
console.log(parseInt("200.99"));   // Output: 200
console.log(parseFloat("200.99")); // Output: 200.99

// 🔟 Try toFixed(0) and toFixed(5) on 3.14159
console.log(3.14159.toFixed(0));  
// Output: "3"  (rounded to 0 decimal places)
console.log(3.14159.toFixed(5));  
// Output: "3.14159" (shows 5 digits after decimal)
