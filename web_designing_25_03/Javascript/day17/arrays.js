/* 
Arrays
1. array is non-primitive data type.
2. array is use to store collection of data in a single variable.
3. To define array we use [] <- square brackets.
4. Only in JS array is an object. Objects are collection of method and properties.

Console provide much more information compared to document.write.
*/

var arr = ["Vinay", "Dinesh"];
var arr2 = [1,2,3,5,6,7];
var arr3 = [true,false,null];
/*Mixed Array with Multi-Dimentional array*/
var multiArray = ["sam", "john", true, 1, 50, [50,30]];
// console.log(typeof(arr));
// console.log(arr2);
// console.log(arr3);
// console.log(multiArray);
// document.write(multiArray);
// to fetch array
// console.log(multiArray[2]);

// console.log(multiArray[5][1]);

/* to change value
change name john to allen
*/
multiArray[1] = "allen";
// console.log(multiArray[1]);

// task
let newArray = [
    "html", "css", "js", 
    [20,30,60,70],
    "reactjs", "angular", 
    [true],
    ["sam", "john"]
];

// take out reactjs, true, john
// document.write(newArray);
// console.log(newArray);
// console.log(newArray[4]);
// console.log(newArray[6][0]);
// console.log(newArray[7][1]);

/* update the below values
 angular => java
 sam and john => any name
*/  
newArray[5] = "java";
newArray[7][0] = "allen";
newArray[7][1] = "peter";
// console.log(newArray[5]);
// console.log(newArray[7][0]);
// console.log(newArray[7][1]);
// console.log(newArray);
// document.write(`<br>`);
// document.write(newArray);

/* 
Array method
Array Creation with new keyword */
// const arr5 = new Array();
// arr5[0]=["Vinay", "Dinesh"];
// arr5[1] = [12,3];
// arr5[2] = [true, false];
// console.log(arr5);

/*Object creation
1. Objects are defined in curly brackets {} separated by commas(,).
2. Objects have methods and properties.
3. Properties are key value pairs.
4. We can fetch the value by using dot(.) or like array obj["key"];
*/
var emp = {
    name: "vinay",
    city: "mumbai",
    contact: 9090900
}
// console.log(typeof(emp));
// console.log(emp);
// console.log(emp.city);
// console.log(emp["city"]);


var emp2 = new Object();
emp2.name = "sam";
emp2["city"] = "nyc";
console.log(emp2);



