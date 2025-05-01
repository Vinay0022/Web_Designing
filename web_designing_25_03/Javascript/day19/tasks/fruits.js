let fruits = ["apple", "banana", "cherry", "date", "fig"];
// Expected result: ["apple", "banana", "grape", "kiwi", "fig"]

fruits.splice(2, 1, "grape");
fruits.splice(3, 1, "kiwi");
document.write(fruits);
console.log(fruits);
