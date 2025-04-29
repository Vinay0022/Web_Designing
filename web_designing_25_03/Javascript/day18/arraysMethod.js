/* 1. length
To get length of the data type.
*/
var num = [4, 10, 25, 100, 55, 75];
// console.log(num.length);

/* 2. toString
To convert a data type into string.
*/
var num = 2;
var demo = num.toString();
// console.log(typeof(num));
// console.log(typeof(demo));

/* 3. Join 
Join is used to join the whole array with the specified character. 
*/
var arr = ["mon, tus, wed, thus, fri, sat, sun"];
let new_arr = arr.join("//");
// console.log(arr);
// console.log(new_arr);
// document.write(new_arr);

/* 4. Push
add the element to the last
*/
var arr1 = ["mon, tus, wed, thus, fri, sat, sun"];
arr1.push("Weekend");
// console.log(arr1);

/* 5. unshift 
add the element to the first
*/
var arr2 = ["mon, tus, wed, thus, fri, sat, sun"];
arr2.unshift("Weekdays");
// console.log(arr2);

/* 6. shift 
delete data by default it delete first element 
*/
var arr3 = ["mon, tus, wed, thus, fri, sat, sun"];
arr3.shift();
// console.log(arr3);

/*
. slice 
extract some part of array and returns new array
*/
var num1 = [10, 20, 40, 50, 30];
var x = num1.slice(2, 4);
// console.log(x);

/* . splice
It remove and replace it.
1. position, count, replacement.
2. does note return new array.
*/
let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
fruits.splice(4, 1, "Strawberry");
// console.log(fruits);
// document.write(fruits);

/*
concat 
concatenate the arrays.
*/
var val = [1, 2, 3, 4];
var val2 = [5, 6, 7, 8];
var res = val.concat(val2);
// console.log(res);

/*
reverse
It reverses the arrays.
*/
var ordered = [1, 2, 3, 4];
var reversed = ordered.reverse();
// console.log(reversed);


/*
sort 
*/
let alphabets = ["A","D","C","B"];
let sorted = alphabets.sort();
document.write(sorted);

/* Sorting Numbers
numbers are not sorted for that we have to do that using compare function and we have to provide (create) compare function
 p-q => ascending
 q-p => descending
There are two ways to create compare function for sorting numbers and they are as follow:
*/
// Type 1 sort
// creating function inside the sort parameter.
let sorted_num =[ 1200,4,10,25,100,55,75];
sorted_num.sort(
    function (p,q) {
        return q-p;
    }
);
// console.log(sorted_num);

// Type 2 sort
// passing defined function to sort parameter
// sort(compareFunction)
// sort(compareFunction) parameter require function defination. So we cannot call the function inside it. We just have to provide the name of the function.
let numArr = [1004,100,2005,100,55,75];
numArr.sort(arrSort);
function arrSort(p,q){
    return p-q;
}
console.log(numArr);

/* VERY IMPORTANT
Difference between calling function and passing function name in another function parameter.
If we pass just the name of the function inside the parameter then we pass the function defination.
If we call the function then it will execute that function.
e.g. sort()
*/

// Arrow Function
// let one = ()=>{
//     console.log("Hello, World!");
// }
// one();
