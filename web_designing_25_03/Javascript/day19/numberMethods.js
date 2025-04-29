/*
Number methods
1. Math.PI
2. sqrt()
3. pow()
4. round()
5. ceil() increase by 1 after .1.
6. floor() discard numbers after decimal.
7. min
8. max
9. toFixed(value) it will only show specified number(value parameter) of deciaml value.
10. random() 
*/

console.log(Math.PI);

let m = Math.round(27.7774);
console.log(m);

let n = Math.ceil(0.25);
console.log(n);

let o = Math.floor(125.99);
console.log(o)

let a = [10,20,30,40,50,60];
// spread operator expands the array.
console.log(Math.min(...a));

let b = [10,20,30,40,50,60];
console.log(Math.max(...b));

let name1 = ["vinay"];
let name2 = ["deepak"];
let name3 = ["ashitosh"];
let name4 = ["dinesh"];
let name5 = ["mandira"];

// Q) name variable should contain all the name1,name2,name3,name4 and name5 value
// 1. using concat
let name = name1.concat(name2,name3,name4,name5);
console.log(name);
// Q) Now remove them from array.
// 2. using spread operator
console.log(...name1,...name2,...name3,...name4,...name5);


let fruits = ["apple", "mango", "grapes"];
let randomFruit = fruits[Math.random() * fruits.length];
console.log(randomFruit);