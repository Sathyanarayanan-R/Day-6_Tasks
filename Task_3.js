
// GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 1

// Fix the code to get the largest of three.

// aa = (f,s,t) => {
//  let f,s,t;
//  console.log(f,s,t);
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }aa(1,2,3);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

let z = 0;

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

aa = (f,s,t) => {
    console.log(f,s,t);
    if(f > s && f > t) {
        console.log(f);
    }
    else if(s>f && s>t) {
       console.log(s);
    }
    else {
       console.log(t)
    }
 }
 
 aa(1,2,3);

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 2
 
//  Fix the code to Sum of the digits present in the number

// let n = 123;console.log(add(n));function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

let n = 123;
  
console.log(add(n.toString()));

function add(n)
{
    let sum = 0;
    for(var i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    return sum;
}    

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 3

// Fix the code to Sum of all numbers using IIFE function

// Code:

// const arr = [9,8,5,6,4,3,2,1];(function() {
//  let sum = 0;
//  for (var i = 0; i <= arr.length; i++);{
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

(() => {
const arr = [9,8,5,6,4,3,2,1];
   
(function() {
     let sum = 0;
     for (var i = 0; i < arr.length; i++){
         sum += arr[i];
     }
    console.log(sum);
})();
})();

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 4

// Fix the code to gen Title caps.

// Code:

// var arr = [“guvi”, “geek”, “zen”, “fullstack”];var ano = function(arro) {
//  for (var i = 0; i <= arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

var arr = ["guvi", "geek", "zen", "fullstack"];
 
var ano = function(arro) {
  for (var i = 0; i < arro.length; i++) {
       console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
}

ano(arr);

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 5

// Fix the code to return the Prime numbers

// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<=num;i++){
//  if(num%i===0)
//  {
//  return true;
//  }
//  }
//  return num===1;
// });
// console.log(myPrime);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

const newArray=[1,3,2,5,10];
  
const myPrime = newArray.filter( num => {
    if(num === 1 || num !== 2 && num % 2 === 0) 
       return false;
    for(let i = 3; i < num / 2; i += 2){
        if(num % i === 0)
        {
          return false;
        }
    }
    return true;
});

console.log(myPrime);

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 6

// Fix the code to sum the number in that array

// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) =>
//  a + b
// const sum = num.reduce(sum)
// console.log(sum);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
 
const sumFunc = (a, b) => a + b;

sum = num.reduce(sumFunc);

console.log(sum);

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 7

// Fix the code to rotate an array by k times and return rotated array using IIFE function

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  arr = {};
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;

(function() {
  out = arr.slice(k + 1, arr.length);
  var count = out.length;
  
  for (var i = 0; i < k + 1; i++) {
      out[count] = arr[i];
      count += 1;
  }
  console.log(out);
})();

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 8

// Fix the code to gen Title caps.

// var arr = [“guvi”, “geek”, “zen”, “fullstack”];(function() {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
//  }
// })();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

var arr = ["guvi", "geek", "zen", "fullstack"];
  
(function() {
  for (var i = 0; i < arr.length; i++) {
      console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})();

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 9

// print all odd numbers in an array using IIFE function

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];(function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//  console.log(arr[i]);
//  }}
// })();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
  
(function() {
   for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
          console.log(arr[i]);
      }}
})();

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 10

// Fix the code to reverse.

// (function(str){
//  str1 = str.split(“ “).reverse().join(“”);
//  console.log(str1); 
// })(“abcd”)

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

(function(str){
      
    str1 = str.split("").reverse().join("");
    console.log(str1); 
 })("abcd")

 document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 11

//  Fix the code to remove duplicates.

// var res = function(arr){
//  for(var i=0; i < arr.length; i++){
//  newArr = [];
//  if(newArr.indexOf(arr[i]) == -1) {
//  newArr.push(arr[i]);
//  } }
//  console.log(newArr)
// }res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

var res = function(arr){
    newArr = [];
    for(var i=0; i < arr.length; i++){
       if(newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i]);
       } 
   
     }
     console.log(newArr)
 }
 
 res(["guvi","geek","guvi","duplicate","geeK"]);

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 12

//  Fix the code to give the below output:

// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

// Code:

// var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
// var final=[]
// while(array.length!=0)
// {
//  var outer_remove = array.shift();
 
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)}

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

var array =[[["firstname","vasanth"],["lastname","Raja"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final = [];


while(array.length!=0)
{
    var outer_remove = array.shift();
    var new_object = {};
    while(outer_remove.length!=0)
    {
        var inner_remove = outer_remove.shift()
        var key = inner_remove[0];
        var value =inner_remove[1];
        new_object[key]=value;
    }
   final.push(new_object);

}
console.log(final);

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 13

// Fix the code to give the below output:

// Sum of odd numbers in an array

// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(s);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

var as = [12,34,5,6,2,56,6,2,1];
var s = as.reduce(function(a,c){
if(c % 2 != 0)
{
    return a+c;
}
return a;}, 0);
console.log(s);

document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 14

// Fix the code to give the below output:

// Swap the odd and even digits

// aa = data=>{
//  var a=data;
// for(i=0;i<a.length-1;i++){
//  var l=’’;
//  var s=a[i+1]
//  var b=a[i]
//  l+=s
//  l+=b
//  i=i+1
// }
// if((a.length%2)!=0){
//  l+=a[a.length-1]
// }
// console.log(l);
// }aa(“1234”);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert(`***** For QUESTION ${++z} Output Please find in the JS Console *****`);
console.log(`\n***** QUESTION ${z} Output : *****`);

aa = data => {
    var a=data;
    var l='';
    for(i=0;i<a.length-1;i++){
        var s=a[i+1]
        var b=a[i]
        l+=s
        l+=b
        i=i+1
    }
    if((a.length%2)!=0){
        l+=a[a.length-1]
    }
    console.log(l);
 }   
 
 aa("1234");

 document.write(`<br> QUESTION ${z} --> Executed Successfully <br>`);
console.log(`QUESTION ${z} --> Executed Successfully`);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -