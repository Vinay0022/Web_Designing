/*
conditional statement
There are different types of conditional statements.
1. for loop
2. while loop
3. do while
4. ternary operator => introduced in es6
5. switch case
*/

/* for loop
for(initialization;condition;increment/decrement){
    body
    }
*/
// for(var i=0;i<5;i++){
//     console.log(i);
// }

// for(var i=4;i>0;i--){
//     console.log(i);
// }

// for(var i=0;i<5;i++){
//     if(i==3){
//         console.log("quickxpert");
//     }
//     else{
//         console.log(i);
//     }
// }

/*
while loop
*/
// var count=0;
// while (count<5) {
//     console.log(count);
//     count++;
// }

/*
do while
*/
// var num=0;
// do{
// console.log(num);
// num++;
// }
// while(num<5);

/*
es6 ternary operator
*/
// var num1=10;
// var num2=20;
// syntax (condition) ? "true": "false";
// console.log((num1<num2)? num1: num2);

/*
switch case
*/
var fruit = prompt("Enter the fruit name: ").toLowerCase();
switch(fruit){
    case 'banana':
        console.log(`The Fruit Name is: ${fruit}`);
        break;
    case 'egg':
        console.log(`${fruit} is not fruit`);  
        break;  
    case 'apple':
        console.log(`The Fruit Name is: ${fruit}`);
         break;  
    case 'watermelon':
    console.log(`The Fruit Name is: ${fruit}`);
        break;  
    default:        
        console.log("It's not a fruit");  
}