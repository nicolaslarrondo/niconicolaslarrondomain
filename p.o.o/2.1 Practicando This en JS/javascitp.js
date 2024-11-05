

    function mensaje(){
      alert("this page says \n \n Ninja was liked")
    }

    function eliminar(elemento) {
          
        elemento.remove(); 
        
    }

    function login(elemento){
       if (elemento.innerText  == "Login")  {
           elemento.innerText  = "Loooogin";
       }else{
        elemento.innerText  = "Login"
       }

    }
