# Day 18

## Date

April 28 2025

---

## Tasks

## What I Learned

- API always use array and arrays contains object.
- object does not contain arrays inside them.
- arrayObject
- Constructor using Class (ES6)
- function as Constructor (ES5)
- Arrays Methods
  - slice
  - push
  - unshift
  - pop
  - shift
  - splice
  - join
  - sort

### Concepts

**What is arrayObject?**

- arrayObject means an array which contains object as values .
- object is treated as array elements we can access them using index.
- we can access the key-value or properties using dot (.) `arr[index].key;` or also like arrays `arr[index]["key"];`

```javascript
let arr = [
  1,
  2,
  3,
  4,
  {
    fname: "peter",
    age: 26,
    salary: 200000,
  },
];
```

**NOTE: We can only put object inside the array but we cannot put array inside the object.**

**Explain methods of arrays.**

1. How to get length of the array?

- `length()`

```javascript
let arr = [1, 2, 3, 4];
console.log(arr.length());
```

2. How to convert a non-string data type into string.

- `toString()`

```javascript
let value = 20;
let valueString = value.toString();
console.log(valueString); // 20
console.log(typeof valueString); // string
```

3. How to converts all the array elements into string with specified separator string?

- `join()` is used to convert all the array elements into string. It concatenates them, separated by a specified separator string. If no separator is provided, it defaults separator is comma (,).
- original array remain unchanged. It returns a new array.

```javascript
let arr = [1, 2, 3, 4, 5];
let arrString = arr.join("//");
console.log(arrString); // 1//2//3//4//5
```

4. How to insert element at the last in an array?

- `push()` is used to insert element at the last of an array.

```javascript
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
```

5. How to insert element at the beginning of an array?

- `unshift()` is used to insert element at the start of an array.

```javascript
let arr = [2, 3, 4, 5];
arr.unshift(1);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
```

6. How to remove last element from an array?

- `pop()` is used to remove last element of an array.

```javascript
let arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); // [ 1, 2, 3, 4 ]
```

7. How to extract some part of an array without modifying the original array?

- `slice(from, to)` is used to extract some part of an array.
- from is inclued and to is excluded both "from" and "to" are not index of array, they are actual position of element.
- It does not change original array. It return new array.

```javascript
let arr = [1, 2, 3, 4, 5];
let arrSliced = arr.slice(1, 3);
console.log(arrSliced); // [ 2, 3 ]
```

8. How to remove and replace at particular index in an array?

- `splice(position, count(number of replacement), replacement(number depends on the count))`
- the position is index of an array.
- splice changes the original array.

```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 1, 9); // [ 1, 9, 3, 4, 5 ]
console.log(arr);
```

9. How to concatenate arrays?

- `concat()` is used to concatenate two arrays.
- return new array. Does not change both two original arrays.

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let res = arr1.concat(arr2);
console.log(res); // [ 1, 2, 3, 4, 5, 6, 7, 8]
```

10. How to reverse an array?

- `reverse()` is used to reverse the array elements.
- It changes the original array.

```javascript
let arr = [1, 2, 3, 4, 5];
let arrReversed = arr.reverse();
console.log(arrReversed); // [ 5, 4, 3, 2, 1 ]
console.log(arr); // [ 5, 4, 3, 2, 1 ]
```

**How many methods are there that return new array and don't change original array?**

- There are 3 methods

1. slice().
2. join().
3. concate().

**How many methods are there that changes the original arary?**

- There are 6 methods.

1. push(). insert at last.
2. unshift(); insert at first.
3. pop(); removes last.
4. shift(); remove first.
5. splash();
6. reverse();
