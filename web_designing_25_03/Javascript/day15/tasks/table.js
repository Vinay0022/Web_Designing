// Single Table
let table = prompt("Enter the table number: ");
for(let i=1;i<=10;i++){
let result = table*i;
document.write(`${table} x ${i} = ${result}`);
document.write(`<br>`);
}


// Tables from 1 to n.
// let table = prompt("Enter the table number: ");
// for(let i=1; i<=table;i++){
//     for(let j=1;j<=10;j++){
//         let result = i*j;
//         document.write(`${i} x ${j} = ${result} `+"<br>");
//     }
//     document.write(`<br>`);
// }