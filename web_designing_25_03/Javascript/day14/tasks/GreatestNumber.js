let number1 = prompt("Enter First Number: ");
let number2 = prompt("Enter Second Number: ");
let number3 = prompt("Enter Third Number: ");

if(number1>number2 && number1>number3){
confirm(`Greatest Number is number1: ${number1}`);
}
else if(number2>number1 && number2>number3){
    confirm(`Greatest Number is number2: ${number2}`);
    }
else{
    confirm(`Greatest Number is number3: ${number3}`);
}

