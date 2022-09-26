
// GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 1

// Find the culprit

// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 2

// Find the culprit and invoke the alert

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// scripts.js

// alert(“I’m invoked!”);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 3

// Explain the below how it works

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** QUESTION 3 *****");
document.write("<br> Question 3 Explanation :<br>");
document.write("<br>In JavaScript Semicolon is optional to separate statements from one another. JavaScript treats a line break as a semicolon if the next non space character cannot be interpreted as a continuation of the current statement. So this coded executed without any error.<br>");
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working
document.write("<br> QUESTION 3 --> Executed Successfully <br>");
console.log("QUESTION 3 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 4

// Fix the below to alert Guvi geek

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;alert( admin ); // "Guvi geek"

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** QUESTION 4 *****");
let admin=9, fname=10.5; 
fname = "Guvi";
lname = " geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"
document.write("<br> QUESTION 4 --> Executed Successfully <br>");
console.log("QUESTION 4 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 5

// Fix the below to alert hello Guvi geek

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"let name = fname+lname;alert( 'hello ${name}' );

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

(() => {
alert("***** QUESTION 5 *****");   
let fname=10.5; 
fname = "Guvi ";
lname = "geek";
let name = fname+lname; 
alert(`hello ${name}`);
document.write("<br> QUESTION 5 --> Executed Successfully <br>");
console.log("QUESTION 5 --> Executed Successfully");
})();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 6 & 7

// Fix the below to alert sum of two numbers

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** QUESTION 6 & 7 *****");
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));
document.write("<br> QUESTION 6 & 7 --> Executed Successfully <br>");
console.log("QUESTION 6 & 7 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 8

// If you run the below scritpt you will get “Code is Blasted”

// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// var a = "2" > "12";//Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -


(() => { 
alert("***** For QUESTION 8 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 8 Output : *****");    
var a = 2 > 12;//Don't touch below this
if (a) {
  console.log("Code is Blasted");
}
else
{
  console.log("Diffused");
}
document.write("<br> QUESTION 8 --> Executed Successfully <br>");
console.log("QUESTION 8 --> Executed Successfully");
})();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 9

// How to get the success in console.

// let a = prompt("Enter a number?");//Don't modify any code below thisif (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -


(() => {
alert("***** For QUESTION 9 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 9 Output : *****");      
let a = parseInt(prompt("Enter a number?"),10);//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
document.write("<br> QUESTION 9 --> Executed Successfully <br>");
console.log("QUESTION 9 --> Executed Successfully");
})();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 10

// How to get the correct score in console.

// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 10 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 10 Output : *****"); 
let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
document.write("<br> QUESTION 10 --> Executed Successfully <br>");
console.log("QUESTION 10 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 11

// Fix the code to welcome the Employee

// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';console.log(message);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — 

alert("***** For QUESTION 11 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 11 Output : *****"); 
let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(message);
document.write("<br> QUESTION 11 --> Executed Successfully <br>");
console.log("QUESTION 11 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 12

// Fix the code to welcome the boss

// // You cant change the value of the msg
// let message;if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

//You cant change the value of the msg
(() => {
alert("***** For QUESTION 12 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 12 Output : *****");    
let message;
if (null || 2 || undefined )
{
   message = "welcome boss";
}
else
{
   message = "Go away";
}
  console.log(message);
document.write("<br> QUESTION 12 --> Executed Successfully <br>");
console.log("QUESTION 12 --> Executed Successfully");
})();
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 13

// Fix the code to welcome the boss

// let message;
// let lock = 2;//Dont change any code below this if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

(() => {
alert("***** For QUESTION 13 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 13 Output : *****");
let message;
let lock = 0;//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
document.write("<br> QUESTION 13 --> Executed Successfully <br>");
console.log("QUESTION 13 --> Executed Successfully");
})();
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 14

// Fix the code to welcome the boss

// let message;
// let lock = 2;//Dont change any code below thisif (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

(() => {
alert("***** For QUESTION 14 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 14 Output : *****");
let message;
let lock = '';//Dont change any code below this

if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
document.write("<br> QUESTION 14 --> Executed Successfully <br>");
console.log("QUESTION 14 --> Executed Successfully");
})();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 15

// Change the code to print

// 3

// 2

// 1

// //You can change only 2 characterslet i = 3;while (i) {
//   console.log( --i );
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 15 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 15 Output : *****");
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( i-- );
}
document.write("<br> QUESTION 15 --> Executed Successfully <br>");
console.log("QUESTION 15 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 16

// Change the code to print 1 to 10 in 4 lines

// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 16 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 16 Output : *****");
for(let num = 1; num <= 10; num++) 
{
  console.log(num);
}
document.write("<br> QUESTION 16 --> Executed Successfully <br>");
console.log("QUESTION 16 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 17

// Change the code to print even numbers

// //You are allowed to modify only one character for (let num = 2; num <= 20; num += 1) {
//   console.log(num)
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

//You are allowed to modify only one character 

alert("***** For QUESTION 17 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 17 Output : *****");

for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}

document.write("<br> QUESTION 17 --> Executed Successfully <br>");
console.log("QUESTION 17 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 18

// Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 18 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 18 Output : *****");

let gifts = ["teddy bear", "drone", "doll"];

for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

document.write("<br> QUESTION 18 --> Executed Successfully <br>");
console.log("QUESTION 18 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 19

// Fix the code to disarm the bomb.

// let countdown = 100;while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 19 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 19 Output : *****");

let countdown = 100;
while (countdown < 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

document.write("<br> QUESTION 19 --> Executed Successfully <br>");
console.log("QUESTION 19 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 20

// Whats the msg printed and why?

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;if (lemein) {
//  msg += “hi”;
//  }if (lemeout) {
//  msg += ‘Hello’;
// }console.log(msg);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 20 Output Please find in the JS Console *****");
document.write("<br> Question 20 Explanation :<br>");
document.write("<br>'hi' will be printed - Reason - the value of lemein variable is a string because 0 is enclosed within double quotes So while checking if condition It will be converted to its equivalent ASCII code which is 48 then if condition becomes true<br>");
console.log("\n***** QUESTION 20 Output : *****");

var lemein = "0";
var lemeout = 0;
var msg = "";

if (lemein) {
 msg += "hi";
 }
 
 if (lemeout) {
 msg += 'Hello';
}

console.log(msg);

document.write("<br> QUESTION 20 --> Executed Successfully <br>");
console.log("QUESTION 20 --> Executed Successfully");

// 