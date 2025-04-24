let num = prompt("Enter the number: ");
let result =1;
for(let i=1;i<num;i++){
  result = result*(i+1);
}
confirm(`factorial of the number ${num}: is ${result}`);
