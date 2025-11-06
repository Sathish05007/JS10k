    // 1. Print numbers from 1 to 50
    for (let i = 1; i <= 50; i++) {
      console.log(i);
    }

    // 2. Print even numbers from 1 to 100
    for (let i = 2; i <= 100; i += 2) {
      console.log(i);
    }

    // 3. Print odd numbers from 1 to 100
    for (let i = 1; i <= 100; i += 2) {
      console.log(i);
    }

    // 4. Print numbers from 10 to 1 (reverse)
    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }

    // 5. Print multiplication table of a number
    let num = 5;
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }

    // 6. Print sum of first 50 natural numbers
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
      sum += i;
    }
    console.log("Sum of first 50 natural numbers:", sum);

    // 7. Find factorial of a number
    let n = 5, fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log(`Factorial of ${n} is ${fact}`);

    // 8. Count digits in a number
    let number = 123456;
    let count = 0;
    while (number > 0) {
      count++;
      number = Math.floor(number / 10);
    }
    console.log("Number of digits:", count);

    // 9. Reverse a number
    let num2 = 12345, rev = 0;
    while (num2 > 0) {
      rev = rev * 10 + (num2 % 10);
      num2 = Math.floor(num2 / 10);
    }
    console.log("Reversed number:", rev);

    // 10. Print characters of a string using loop
    let str = "JavaScript";
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }

    // 11. Count vowels in a string
    let text = "Hello JavaScript";
    let vowels = "aeiouAEIOU";
    let vCount = 0;
    for (let ch of text) {
      if (vowels.includes(ch)) vCount++;
    }
    console.log("Vowel count:", vCount);

    // 12. Print array elements using for...of
    let arr = [10, 20, 30, 40];
    for (let val of arr) {
      console.log(val);
    }

    // 13. Print array indexes & values using for...in
    for (let index in arr) {
      console.log(`Index: ${index}, Value: ${arr[index]}`);
    }

    // 14. Find largest number in an array
    let nums = [45, 67, 12, 89, 34];
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > largest) largest = nums[i];
    }
    console.log("Largest number:", largest);

    // 15. Print only positive numbers from array
    let numbers = [-5, 10, -2, 25, 0, 8];
    for (let n of numbers) {
      if (n > 0) console.log(n);
    }

    // 16. Print 1 to 20 except 10 using continue
    for (let i = 1; i <= 20; i++) {
      if (i === 10) continue;
      console.log(i);
    }

    // 17. Stop printing when 15 is reached using break
    for (let i = 1; i <= 20; i++) {
      if (i === 15) break;
      console.log(i);
    }

    // 18. Print star pattern
    let rows = 5;
    for (let i = 1; i <= rows; i++) {
      console.log("*".repeat(i));
    }

    // 19. Print Fibonacci series up to 10 terms
    let a = 0, b = 1;
    console.log(a);
    console.log(b);
    for (let i = 3; i <= 10; i++) {
      let c = a + b;
      console.log(c);
      a = b;
      b = c;
    }

    // 20. Check prime number using loop
    let numCheck = 29;
    let isPrime = true;
    if (numCheck <= 1) isPrime = false;
    for (let i = 2; i <= Math.sqrt(numCheck); i++) {
      if (numCheck % i === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(`${numCheck} is ${isPrime ? "a prime number" : "not a prime number"}`);
