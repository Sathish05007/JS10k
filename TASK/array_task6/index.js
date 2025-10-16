//1
var colors=["red","blue","green","yellow","white"]
console.log(colors)
console.log("Second Element:",colors[2])
console.log("Last Element:",colors[4])

//2
var num=[1,300,500,700]
console.log("Array before updating:", num)
num[0]=100
console.log("Array after updateing the values:",num)

//3
var st_info=["sathish",8977239316,"MERN",88.8,true]
console.log(st_info)
// console.log(typeof(st_info[0]))
// console.log(typeof(st_info[1]))
// console.log(typeof(st_info[2]))
// console.log(typeof(st_info[3]))
// console.log(typeof(st_info[4]))

for (let i=0; i<st_info.length; i++) {
    console.log(typeof(st_info[i]))
}

//4
var msd=["MSD","India","Csk",[2018,2020,2023]]
console.log(msd)
console.log(msd[3][1])

//5
var arr= new Array()
console.log(arr)
console.log(arr.length)

//6
var fruits=["apple","banana","mango","guva"]
console.log(fruits)
fruits.push("grapas")
console.log(fruits)

//7
console.log("Removed element from Fruits:",fruits.pop())
console.log(fruits)

//8
fruits.unshift("orange")
fruits.unshift("pineapple")
console.log(fruits)

//9
fruits.shift()
console.log(fruits)

//10
fruits.pop()
fruits.pop()
console.log(fruits)

//11
var tens=[10,20,30,40,50]
console.log(tens)
//extract 20, 30
console.log(tens.slice(1,3))

//12.replace 30 with 35.
tens.splice(2,1,35)
console.log(tens)

//13
var tens=[10,20,30,40,50]
console.log(tens)
// Insert 25 before 30
tens.splice(1,1,25)
console.log(tens)

//14.Removed last two elements
tens.splice(3,2)
console.log("Removed last two elements:",tens)

//15.copy the first three elements into a new array.
var new_arr=tens.slice(0,4)
console.log(new_arr)

//16
var arr1=[1,2,3]
var arr2=[4,5,6]
console.log(arr1)
console.log(arr2)
var num=arr1.concat(arr2)
console.log(num)

//17
var names=["sagar","laddu","sathish","rahul"]
console.log(names)

//18
console.log(names.join(","))

//19
var arr1=[1,2,3]
var arr2=[4,5,6]
var arr3=[7,8,9]
var num=arr1.concat(arr2.concat(arr3))
console.log(num)
console.log("Lenght is:",num.length)

//20
var city=["Hyderabad","Bengaluru","Chennai","Mumbai","Delhi"]
console.log(city)
console.log(city.join("-"))

//21
var fruit=['apple', 'banana', 'orange', 'banana', 'grape']
console.log(fruit)
console.log(" First index of 'banana':",fruits.indexOf('banana'))

//22
console.log(" Last index of 'banana':",fruits.lastIndexOf('banana'))

//23
console.log(fruits.includes('mango'))

//24
if(!fruit.includes('mango')) {
     fruit.push('mango')
}
else{
    console.log("Already exists")
}
console.log(fruit)

//25
if(!fruit.includes('kiwi')) {
    console.log("Not Present in the array")
}
else{
    console.log("present in the array")
}

//26
var a=[5,12,8,130,44]

for (let i=0; i<a.length; i++) {
    if(a[i]>10){
        console.log(a[i])
        break
    }
}

//27
//28
//29
//30

//31
var arr=[5,3,8,1,2]
arr.sort()
console.log(arr)

//32
arr.reverse()
console.log(arr)

//33
//34
//35


//36
var b=[1,2,3,4,5,6,7,8,9,10]
console.log(b.length)

//37
b.pop()
console.log(b.length)

//38
let [first,second,third] =b;
console.log(first)
console.log(second)
console.log(third)

//39
const ar1=[1,2,3]
console.log(ar1)
ar1.pop()
console.log(ar1)
ar1.push(10)
console.log(ar1)

//40
var arr2=[5,12,8,130,44]
console.log(arr2)

arr2.push(7,99)
console.log(arr2)

console.log(arr2.sort())
console.log(arr2.reverse())
arr2.splice(4,0,10)
console.log(arr2)

