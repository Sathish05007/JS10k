// 1. Positive or Negative
let num = -5;
if(num > 0) console.log("Positive"); else console.log("Negative");

// 2. Even or Odd
let n = 4;
console.log(n % 2 === 0 ? "Even" : "Odd");

// 3. Driving License Eligibility
let age = 19;
console.log(age >= 18 ? "Eligible" : "Not Eligible");

// 4. Divisible by 5 & 11
let a = 55;
if(a % 5 === 0 && a % 11 === 0) console.log("Yes"); else console.log("No");

// 5. Grade
let marks = 82;
if(marks>=90) console.log("A");
else if(marks>=75) console.log("B");
else if(marks>=50) console.log("C");
else console.log("Fail");

// 6. Largest of two
let x=10, y=20;
console.log(x>y?x:y);

// 7. Largest of three
let p=12,q=40,r=25;
if(p>q && p>r) console.log(p);
else if(q>r) console.log(q);
else console.log(r);

// 8. Leap Year
let year = 2024;
if((year%4===0 && year%100!==0) || year%400===0) console.log("Leap Year"); else console.log("Not Leap");

// 9. Day switch
let day = 3;
switch(day){
  case 1:console.log("Mon");break;
  case 2:console.log("Tue");break;
  case 3:console.log("Wed");break;
  default:console.log("Invalid");
}

// 10. Vowel or Consonant
let ch='e';
if("aeiouAEIOU".includes(ch)) console.log("Vowel"); else console.log("Consonant");

// 11. Password Check
let pass = "admin123";
if(pass==="admin123") console.log("Login Success"); else console.log("Wrong Password");

// 12. Triangle Type
let s1=5,s2=5,s3=5;
if(s1===s2 && s2===s3) console.log("Equilateral");
else if(s1===s2 || s2===s3 || s1===s3) console.log("Isosceles");
else console.log("Scalene");

// 13. Number in Range
let val=55;
console.log(val>=1 && val<=100 ? "Yes" : "No");

// 14. Traffic Light
let signal="red";
if(signal==="red") console.log("Stop");
else if(signal==="yellow") console.log("Wait");
else console.log("Go");

// 15. Electricity Bill
let units = 120;
let bill;
if(units<=50) bill=units*2;
else if(units<=100) bill=100+((units-50)*3);
else bill=250+((units-100)*5);
console.log(bill);

// 16. Greeting
let time=17;
if(time<12) console.log("Good Morning");
else if(time<17) console.log("Good Afternoon");
else console.log("Good Evening");

// 17. Scholarship
let score=85, income=30000;
if(score>80 && income<50000) console.log("Eligible"); else console.log("Not Eligible");

// 18. Attendance Grade
let att=78;
if(att>90) console.log("Excellent");
else if(att>75) console.log("Good");
else if(att>60) console.log("Average");
else console.log("Poor");

// 19. Role Based Login
let role="admin";
if(role==="admin") console.log("Welcome Admin");
else if(role==="user") console.log("Welcome User");
else console.log("Guest Access");

// 20. Days in Month
let month=2;
switch(month){
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:console.log("31 days");break;
  case 4: case 6: case 9: case 11:console.log("30 days");break;
  case 2:console.log("28/29 days");break;
  default:console.log("Invalid Month");
}
