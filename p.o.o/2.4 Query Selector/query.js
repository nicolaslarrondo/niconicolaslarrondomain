
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");

var logoimg = document.querySelector(".logo.png");

var h3 = document.querySelector("h3");
h3.innerText = "new title";

var petimg = document.querySelector("#pet-img");

function switchimg(){
    petimg.src = "dog.jpg"
}


function setactive(elemento){
   elemento.style.backgroundColor ="#222222";
   elemento.style.color ="#ffffff";
}

function setactive(element){
element.classList.add("dark-mode")
}

function setactive(elemt){
    if(elemt.classList.includes("dark-mode")){
        elemt.innerText="cambiar al modo claro";
        elemt.classList.remove("dark-mode");
    } else {
        elemt.innerText = "cambiar al modo oscuro";
        elemt.classList.add("dark-mode")
    }
}
