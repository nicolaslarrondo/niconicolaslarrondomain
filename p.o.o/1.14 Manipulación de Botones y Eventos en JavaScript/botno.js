
function boton(element){
 
  
    
   if(element.style.background  !== "green" && element.innerText == "activado"){
      element.innerText = "desactivado";
    element.style.background  = "green"
   }
   else{
    element.style.background  = "white"
    element.innerText = "activado";
   }
}


function boton2(element){
   element.remove(); 
}