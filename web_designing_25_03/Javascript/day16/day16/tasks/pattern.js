let row = prompt("Enter the number: ");

for (let i = 1; i<=row; i ++) {
for (let j = 1; j <=i+1 ; j++) {
    if(i==1){
      document.write(1);
      break;
    }
    else if(j==i+1){
      document.write(1);
    }
    else{
      document.write(j);
    }
}
  document.write(`<br>`);
}
