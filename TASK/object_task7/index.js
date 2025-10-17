var student={
    name:"sagar",
    age:22,
    course:"Mca",
    marks:90
}
console.log(student)

student.grade="A"
console.log(student)
student.marks=95
console.log(student)

console.log(Object.keys(student))

console.log(Object.values(student))

console.log(Object.entries(student))

var address={
    city:"Hyd",
    roll_no:25
}
console.log(address)

var st_info=Object.assign(student,address)
console.log(st_info)

console.log(student.hasOwnProperty("course"))
console.log(student.hasOwnProperty("address"))
console.log(address.hasOwnProperty("city"))

var copy_student=student
console.log(copy_student)

Object.freeze(copy_student)

copy_student.age=27
console.log(copy_student)
copy_student.pass_year=2025
console.log(copy_student)

var copy_student1=student
console.log(copy_student1)
Object.seal(copy_student1)
