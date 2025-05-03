
function show(){
    let title = document.getElementById("demo").innerHTML = "Hello, World!";
    console.log(title);
};
function hide(){
    let title = document.getElementById("demo").innerHTML = "";
    console.log(title);
};


function showImg(){
let addImg = document.getElementById("imgAdd");
addImg.setAttribute("src", "https://cdn.pixabay.com/photo/2023/03/12/08/02/astronaut-7846067_1280.jpg");
addImg.setAttribute("alt","astronaut");
};

function hideImg(){
    let addImg = document.getElementById("imgAdd");
    addImg.setAttribute("src", "");
addImg.setAttribute("alt","");
    };
