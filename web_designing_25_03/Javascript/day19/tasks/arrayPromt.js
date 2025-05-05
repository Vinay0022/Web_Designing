let arrS = prompt("Enter array values: ");

document.write(arrS);
console.log(arrS);
// split returns string array
let arrN = arrS.split(",");

arrN.sort(function (p, q) {
  return p - q;
});
document.write(`<br>`);
document.write(arrN);
console.log(arrN);
console.log(typeof arrN);
