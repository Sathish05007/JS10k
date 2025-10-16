st_Name="sathish";
total_marks=50
is_Passed=(total_marks>40 ? true : false)
// console.log(is_Passed)
// console.log(typeof(is_Passed))

console.log(`Student Name: ${st_Name}`)
console.log(`Total Marks: ${total_marks}`)
console.log(`Passed: ${is_Passed}`)


console.log(typeof(null))//object
console.log(typeof(NaN))//number
console.log(typeof[1,2,3])//object
console.log(typeof{a:1})//object
console.log(typeof(() => {}))//arrow function
console.log(typeof((typeof(2))))//String