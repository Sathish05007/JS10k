function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

// Even or Odd
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

// Largest of three numbers
function largest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(largest(5, 9, 3));

// Factorial of a number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  return fact;
}
console.log(factorial(5));

// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("sathish"));


// Check palindrome
function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam"));

//Count the number of vowels in a string
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Sathish"));  // Output: 2


//Find the square of a number
function square(num) {
  return num * num;
}
console.log(square(6));  // Output: 36


//Convert Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}
console.log(celsiusToFahrenheit(30));  // Output: 86


//Find the maximum element in an array
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([10, 25, 7, 99, 56]));  // Output: 99


//Sum of all elements in an array
function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15


//Check whether a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));  // Output: true


//Average of numbers in an array
function findAverage(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}
console.log(findAverage([10, 20, 30, 40]));  // Output: 25


//Generate a random number between 1 and 100
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
console.log(randomNumber());


//Check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024));  // Output: true


//Convert a string to uppercase
function toUpperCaseString(str) {
  return str.toUpperCase();
}
console.log(toUpperCaseString("sathish"));  // Output: SATHISH


//Capitalize the first letter of each word
function capitalizeWords(str) {
  return str.split(" ").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
}
console.log(capitalizeWords("hello sathish welcome"));  
// Output: Hello Sathish Welcome


// Find the Greatest Common Divisor (GCD)
function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(findGCD(20, 28));  // Output: 4


// Return only even numbers from an array
function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));  // Output: [2, 4, 6]


// Sum of digits of a number
function sumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumOfDigits(12345));  // Output: 15