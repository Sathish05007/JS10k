var str="Hello JS";console.log(str.length);

var str="javascript";console.log(str.toUpperCase(),str.toLowerCase());

console.log("Welcome".slice(0,5));

console.log("web dev".includes("dev"));

console.log("I love JavaScript".replace("JavaScript","JS"));

var s="hello world",c=0;
for(var x of s){
    if("aeiou".includes(x))c++;
}
console.log(c);

console.log("Hello".split("").reverse().join("")); 

console.log("Learn JS Today".split(" "));

console.log("  hi js ".trim());

console.log("frontend".startsWith("front"));

console.log("code.com".endsWith(".com"));

console.log("learn coding".indexOf("coding"));

var st="javascript";
console.log(st[0].toUpperCase()+st.slice(1));

console.log("banana".replaceAll("a","@")); 

var t="hi js student",sp=0;
for(var ch of t)if(ch==" ")sp++;
console.log(sp);

console.log("I love JS".replaceAll(" ",""));

console.log("Hello World".toLowerCase().replaceAll(" ","-"));

console.log("js"[1]);

console.log("Hi!" .repeat(3));

var n="Sathish";
console.log(`Welcome ${n} to JS!`);
