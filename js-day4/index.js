
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

