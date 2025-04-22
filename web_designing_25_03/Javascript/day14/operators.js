// += add and assign
// var a = 10;
// a+=6;
// console.log(a);

// Above code is equivalent to the below code.
// var a = 10;
// a = a+6;
// console.log(a);

// if and else statement
//type coersion
var a = 10;
var b = "10";
// if(a==b){
//     console.log("is equals");
// }
// else{
//     console.log("not equals");
// } 

// type coersion will not take place.
// if(a===b){
//     console.log("is equals");
// }
// else{
//     console.log("not equals")
// }

// var num1=10;
// console.log(num1!=10);
// console.log(num1<10);
// console.log(num1<=10);

// If and else if
// var num1=15;
// if(num1>10){
// console.log(`greate than ${num1}`);
// }
// else if(num1!=10){
//     console.log("not equal");

// }
// else{
//     console.log(`something went wrong`);
// }

// Logical Operator
// 1. && (both should be true).
// 2. || (any one should be true).
// 3. !() reverse the result.
// var p = true;
// var q = true;
// var results = p&&q;
// console.log(results);

// var p = false;
// var q = true;
// var results = p||q;
// console.log(results);

var p = 10;
var q =20;
var result = !(p<5 && q<20);
console.log(result);

// operands and operators and result
// x + y = z;
// x and y are operands.
//  + operator.
// z is result.

// 3 types of dialog boxes.
// 1. alert.
// 2. confirm.
// 3. promt.

// 1. alert
// console.log(alert("Hello, How are you?"));

// 2. confirm
// console.log(confirm("Are you want to delete your credentials"));

// 3. promt.
// console.log(prompt("Enter your No.: "));

var demo = prompt("Enter your no.");
if(demo==10){
    alert(`You have enterd no. ${demo}`);
}
else{
    alert("something went wrong");
}

