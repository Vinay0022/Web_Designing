function play(){
var car = prompt("Enter a car name: ").toLowerCase();
switch(car){
    case "bwm":
        confirm(`${car} is a car.`);
        break;
    case "audi":
        confirm(`${car} is a car.`);
        break;
    case "lamborghini":
        confirm(`${car} is a car.`);
        break;
    case "mercedes":
        confirm(`${car} is a car.`);
        break;
    case "tata":
        confirm(`${car} is a car.`);
        break; 
    default:
        confirm(`${car} no such car in my list`);      
}
}