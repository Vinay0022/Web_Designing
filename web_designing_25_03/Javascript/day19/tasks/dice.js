function rollDice() {
  let num = 7;
  let randomNumber = Math.floor(Math.random() * num);
  console.log(randomNumber);
  document.getElementById("result").innerHTML = `The Number is ${randomNumber}`;
}
