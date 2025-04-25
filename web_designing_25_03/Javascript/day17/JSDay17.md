# Day 17

## Date

April 25, 2025

---

## Day 14 Bugs

- [x] Fix the input for NaN in Greatest of three program.

## Day 16 Bugs

- [x] Fix the input for NaN in calculator program.
- [x] Fix prime number program for input number 1.

## Tasks

- [ ] console log is not giving output for before array it's showing after array.

## NOTE

- `console.log();` provides more information compared to `document.write();`

## What I Learned

- Variable Scope
  - Local Variables
  - Global Variables
- Arrays
- Objects

### Concepts

#### Variable Scope

**Local Variable**

- Variables which are defined inside the method, constructor or block is called local variable.
- local variable are only accessible inside block it's defined.

```javascript
myName();
function myName() {
  let a = 10; // local variable
  console.log(a);
}
```

**Global Variable**

- Variables which are defined outside the method, constructor or block are called global variables.
- global variables are defined at the top otherwise hosting will happen.
- global variables are accessible anywhere in the program.

```javascript
let a = 10; // global variable
let b = 20; // global variable
myName();
function myName() {
  console.log(a + b);
}
```

#### Arrays

- Arrays is non-primitive date type.
- Define with square brackets "[]".
- Used to store ordered collection of data in single variable.
- Arrays are 0 index-based.
- Only in JS Arrays is an objects. Objects are collection of methods and properties.

**Declaration**
There are two syntaxes for creating an array.

```javascript
// With new keyword.
let arr = new Array();
arr[0] = 1;
arr[1] = 1;
arr[2] = 1;

// With square brackets.
let arr2 = [1, 2, 3, 4];
```

- We can create mixed type array.

```javascript
let arr = ["peter", "allen", 1, 2, 3, 4];
```

- We can create Multi-dimensional array.

```javascript
let arr = [
  [1, 2, 3, 4],
  ["sam", "peter", "allen", "john"],
  [true, false],
  [undefined, null],
];
```

- We modify or update the value of arrays with index.

```javascript
let arr = [1, 2, 3, 4];
arr[0] = 10;
/* It will change the value of array arr at 0th index.
arr = [10, 2, 3, 4];
*/
```

#### Objects

- Used to store data in key-value format.
  - keys are string also called as property name.
  - value can be anything.
- Defined with curly brackets and key_name followed by colon: value and are separated by commas (,).
- Objects are colllection of methods and properties.
- Properties are key-value pairs.
- We can fetch the value by using dot(.) or like array obj["key"].

**Declaration**

- There are two syntaxes for object creation.

```Javascript
// With new keyword.
let obj = new Object();
obj.name = "peter";
obj.age = "30";

// Directly with curly brackets.
let obj = {
name: "allen",
age: "18"
};
```

- To modify or update the value.

```javascript
let obj = {
  name: "allen",
  age: "18",
};
obj.name = "peter";
obj["age"] = 29;
```
