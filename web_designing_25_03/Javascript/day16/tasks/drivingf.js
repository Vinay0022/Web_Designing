function drive(){
// var age = 20;
// var age = 50;
// var age = 5;
var value = prompt("Enter your age: ");
var age = parseInt(value);
if(age>=18 && age<50){
    confirm(`Your age is ${age}.You are eligible to drive.`);
}
else if(age<18){
confirm(`Your age is ${age}.your underage. your not eligible drive.`);
}
else if(age>=50){
    confirm(`Your age is ${age}.Your too old to drive.`);
}
else{
    confirm("Something went wrong");
}
}