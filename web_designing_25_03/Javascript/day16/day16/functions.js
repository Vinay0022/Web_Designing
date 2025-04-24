/*
1. Functions are block of reusable code.
2. Functions are only executed when they are called.
*/
/*There are 3 types of functions
1. normal function.
2. anonymous function.
3. fat arrow function.
Anonymous Function and Fat Arrow Function throws hoisting error if not initialized first.
*/

/*1. Normal Function
 Creating add function */
// function add(num1, num2){
//     var num1 = 10;
//     var num2 = 20;
// var res = num1+num2;
// document.writeln(res);
//     console.log(res);
// }
/* Calling the add function */
// add(10,20);

/* 2. Anonymous Function*/
// const sub = function(){
//     var num1=10;
//     var num2=20;
//     var res = num1-num2;
//     document.writeln(res);
//     console.log(res);
// }
// sub();

/*3. Fat Arrow Function */
// const multi=()=>{
//     var num1=10;
//     var num2=20;
//     var res=num1*num2;
//     document.writeln(res);
//     console.log(res);
// }


/*Function with parameters*/
// function add(num1, num2){
//     var res = num1+num2;
//     console.log(res);
//     document.writeln(res);
// }
// add(10,20);

/*Function with Return
return only return the value it does not print the value.
So, use console.log() to print the value of the function.*/
// function sum(){
//     var num1 = 10;
//     var num2 = 20;
//     return num1+num2;
// }
// sum();
// console.log(sum());

/*collection of parameter is called argument
arguments are acutal values while parameters are the variables(value holder)*/
function sum(num1,num2){
    let add = num1+num2;
    document.writeln(`Addition of ${num1} & ${num2} = ${add} with parameter`);
    alert(`addition of ${num1} & ${num2} = ${add} with parameter`);
}