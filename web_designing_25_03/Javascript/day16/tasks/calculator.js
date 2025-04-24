function calculate(operation){
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
  let result;
  if(isNaN(num1) || isNaN(num2)){
    document.getElementById("result").innerHTML="Please enter valid numbers";
}
  switch(operation){
case '+':
    result = num1+num2;
      break;
case '-':
    result = num1-num2;
      break;
case '/':
      if (num2==0) {
    document.getElementById("result").innerHTML="Dividing by zero is not possible.";
        return;
      }else{
    result = num1/num2;
      break;
      }
case '*':
    result = num1*num2;
      break;
      }
  document.getElementById("result").innerHTML = `The Result of ${num1} ${operation} ${num2} is: ${result}`;
  }
