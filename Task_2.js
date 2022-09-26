
// GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 1

// Write a code to print the numbers in the array

// Output: 1234567891011

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];var new_string = “”;
 
// for (var i = 1; i < 11; i--) {
//  new_string += numsArr[i] 
// }console.log(new_string);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 1 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 1 Output : *****");  

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
  new_string += numsArr[i];
}
console.log(new_string);

document.write("<br> QUESTION 1 --> Executed Successfully <br>");
console.log("QUESTION 1 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 2

// Write a code to print the numbers in the array

// Output: 1,2,3,4,5,6,7,8,9,10,11

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];var new_string = “”;
 
// for (var i = 1; i < 11; i++) {
//  new_string += numsArr[i] + , 
// }console.log(new_string);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 2 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 2 Output : *****");

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
    
    if(i !== numsArr.length - 1)
       new_string += numsArr[i] + ',' 
    else
      new_string += numsArr[i]; 
}
console.log(new_string);

document.write("<br> QUESTION 2 --> Executed Successfully <br>");
console.log("QUESTION 2 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 3

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

// Output: 11 10 9 8 7 6 5 4 3 2 1

// var new_string = “”;
 
// for (var i = 11; i > 0; i — ) {
//  new_string += numsArr[i] + “ “ 
// }
// console.log(new_string);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 3 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 3 Output : *****");

new_string = "";
 
for (var i = 11; i > 0; i--) {
   if(i !== 1)
      new_string += i + " ";
   else
      new_string += i;
}
console.log(new_string);

document.write("<br> QUESTION 3 --> Executed Successfully <br>");
console.log("QUESTION 3 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 4

// Write a code to replace the array value — If the number is even, replace it with ‘even’.

// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = odd
//  }
// }
// console.log(numsArr);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 4 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 4 Output : *****");

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
     
for (var i = 0; i <=10; i++) {
   if(numsArr[i] % 2 == 0 )
   {
      numsArr[i] = "even";
   }
}
console.log(numsArr);

document.write("<br> QUESTION 4 --> Executed Successfully <br>");
console.log("QUESTION 4 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 5

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = even
//  }
// }
// console.log(numsArr);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 5 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 5 Output : *****");

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
for (var i = 0; i <=10; i++) {
   if(i % 2 == 0 )
   {
      numsArr[i] = "even";
   }
}
console.log(numsArr);

document.write("<br> QUESTION 5 --> Executed Successfully <br>");
console.log("QUESTION 5 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 6

// Write a code to add all the numbers in the array

// Output: 66

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
//  var sum;
//  sum += numsArr[i]
// }
// console.log(sum);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 6 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 6 Output : *****");

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;

for (var i = 0; i <=10; i++) {
    sum += numsArr[i];
}
console.log(sum);

document.write("<br> QUESTION 6 --> Executed Successfully <br>");
console.log("QUESTION 6 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 7

// Write a code to add the even numbers only
// Output: 30

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0);
//  sum += numsArr[i]
// }
// console.log(sum);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 7 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 7 Output : *****");

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;

for (var i = 0; i < 10; i++) {
    if(numsArr[i] % 2==0)
       sum += numsArr[i];
}
console.log(sum);

document.write("<br> QUESTION 7 --> Executed Successfully <br>");
console.log("QUESTION 7 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 8

// Write a code to add the even numbers and subract the odd numbers
// Output: 94

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0);
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 8 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 8 Output : *****");

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;

for (var i = 0; i <=10; i++) {
    if(numsArr[i] % 2 == 0)
    {
       sum += numsArr[i];
    }
    else
    {
       sum -= numsArr[i];
    }
}
console.log(sum);

document.write("<br> QUESTION 8 --> Executed Successfully <br>");
console.log("QUESTION 8 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 9

// Write a code to print inner arrays
// Output:

// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

// var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++); {
//  console.log( numsArr[i])
// }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 9 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 9 Output : *****");

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
  
for (let i = 0; i < numsArr.length; i++) {
    console.log(`Array(${numsArr[i].length}) [ ${numsArr[i]} ]`);
}

document.write("<br> QUESTION 9 --> Executed Successfully <br>");
console.log("QUESTION 9 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 10

// Write a code to print elements in the inner arrays
// Output: 1234567891011

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 10 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 10 Output : *****");

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all = '';

for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for(var j = 0 ; j < inner_array.length; j++ )
       str_all += inner_array[j];
  }
  console.log(str_all);

document.write("<br> QUESTION 10 --> Executed Successfully <br>");
console.log("QUESTION 10 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 11

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//       if(numsArr[i] %2 == 0 )
//       {
//          numsArr[i] = even
//        }
// }
// console.log(numsArr);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 11 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 11 Output : *****");

for (var i = 0; i < numsArr.length; i++) {
   var inner_array = numsArr[i];
   for(var j = 0 ; j < inner_array.length; j++) {
       if( (i + j) % 2 == 0 )
       {
         inner_array[j] = "even";
       }
   }
 }
 console.log(numsArr);

document.write("<br> QUESTION 11 --> Executed Successfully <br>");
console.log("QUESTION 11 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 12

// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length; j < 0 ;j-- )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 12 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 12 Output : *****");

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all = '';

for (var i = numsArr.length - 1; i >= 0; i--) {
   var inner_array = numsArr[i];
   for(var j = inner_array.length - 1; j >= 0 ;j-- )
      str_all += inner_array[j] + " ";
}
console.log(str_all.trim());

document.write("<br> QUESTION 12 --> Executed Successfully <br>");
console.log("QUESTION 12 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// QUESTION 13

// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(numsArr[i]%2!=0)
//  {
//  sum_odd += numsArr[i]
//  }
//  else
//  {
//  sum_even += numsArr[i]
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

alert("***** For QUESTION 13 Output Please find in the JS Console *****");
console.log("\n***** QUESTION 13 Output : *****");

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;

for (var i = 0; i < numsArr.length; i++) {
   var inner_array = numsArr[i];
   
   for(var j = 0 ; j < inner_array.length;j++){
         if(inner_array[j] % 2 !== 0)
         {
             sum_odd += inner_array[j];
         }
         else
         {
             sum_even += inner_array[j];
         }
     }
}
console.log(sum_odd);
console.log(sum_even);

document.write("<br> QUESTION 13 --> Executed Successfully <br>");
console.log("QUESTION 13 --> Executed Successfully");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -