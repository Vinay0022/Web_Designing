// getElementById takes string(HTML element) as parameter.
let title = document.getElementById("text");
console.log(title);

// getElementsByClassName takes collection of html element parameter.
let title2 = document.getElementsByClassName("text1");
console.log(title2);

let colorTag = document.getElementsByClassName("color1");

for (let i = 0; i < colorTag.length; i++) {
   colorTag[i].style.backgroundColor ="red"; 
}
