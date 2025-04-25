let num = prompt("Enter the number: ");
if (num == 1) {
  confirm(
    `The number ${num} is neither a prime number nor a composite number.`
  );
}
if (num == 2) {
  confirm(`The number ${num} is a prime number.`);
} else if (num % 2 != 0) {
  confirm(`The number ${num} is a prime number.`);
} else {
  confirm(`The number ${num} is not a prime number.`);
}
