

function pop(){

    let nombres = document.getElementById("texto_nombres");
    let lista_1 = document.querySelector("ul")

   
    if(nombres.value !== ''){
        const li = document.createElement('li');
        li.textContent = nombres.value; // Establecer el texto del li

        lista_1.appendChild(li);
    

        nombres.value = '';

    }else{
        alert("no")
    }
      
}
