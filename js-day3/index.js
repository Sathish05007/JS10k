// 1. Create an array of numbers and print its length
let numbers = [10, 20, 30, 40];
console.log("Array:", numbers);
console.log("Length:", numbers.length);

// 2. Add a number to the end using push()
numbers.push(50);
console.log("After push:", numbers);

// 3. Remove the last element using pop()
numbers.pop();
console.log("After pop:", numbers); 

// 4. Add a number to the start using unshift()
numbers.unshift(5);
console.log("After unshift:", numbers);

// 5. Remove the first element using shift()
numbers.shift();
console.log("After shift:", numbers);

// 6. Concatenate two arrays using concat()
let moreNumbers = [50, 60];
let combined = numbers.concat(moreNumbers);
console.log("After concat:", combined);

// 7. Slice elements from index 2 to 4 using slice()
let sliced = combined.slice(2,5); 
console.log("After slice:", sliced); 

// 8. Splice: remove 2 elements from index 1 and add 5,6
let spliced = combined.splice(1,2,5,6);
console.log("Removed elements:", spliced);
console.log("After splice:", combined); 

// 9. Find index of a number using indexOf()
console.log("Index of 40:", combined.indexOf(40));

// 10. Use forEach() to print each element multiplied by 2
combined.forEach(num => console.log(num*2));



// 1. Create an object with 3 properties and print all keys
let person = {name:"Sathish", age:23, city:"Hyderabad"};
console.log("Keys:", Object.keys(person));

// 2. Print all values using Object.values()
console.log("Values:", Object.values(person));

// 3. Convert object to string using JSON.stringify()
let personStr = JSON.stringify(person);
console.log("String:", personStr); 

// 4. Convert string back to object using JSON.parse()
let personObj = JSON.parse(personStr);
console.log("Parsed Object:", personObj);

// 5. Check if a property exists using hasOwnProperty()
console.log("Has age?", person.hasOwnProperty("age"));

// 6. Delete a property and print the object
delete person.city;
console.log("After delete:", person);

// 7. Loop through the object using for...in
for(let key in person){
  console.log(key, ":", person[key]);
}

// 8. Merge two objects using Object.assign()
let extra = {country:"India", profession:"Developer"};
let merged = Object.assign(person, extra);
console.log("Merged Object:", merged);


// 9. Freeze the object and try modifying a property
Object.freeze(merged);
merged.age = 50;
console.log("After freeze attempt:", merged);


// 10. Get all entries (key-value pairs) using Object.entries()
console.log("Entries:", Object.entries(merged));

