
function poquer(){

let cat = (prompt("ingrese su baraja (2 a 10 y 'j', 'q', 'k', 'a')"))    

switch (cat) {
    case "1":
        cat++
        alert("Bet" + cat)
        break;
    case "2":
        cat++
        alert("Bet" + cat)
        break;    
    case "3":
         cat++
         alert("Bet" + cat)
     break;
     case "4":
        cat++
        alert("Bet" + cat)
        break;
    case "5":
        cat++
        alert("Bet" + cat)
        break;
    case"6":
        cat++
        alert("Bet" + cat)
        break;
    case "7":
        alert("Hold" )
        break; 
    case "8":
        alert("Hold" )
        break;     
    case "9":
        alert("Hold" )
        break; 
    case "10":
        alert("Hold" + -1)
        break; 
    case "j":
        alert("Hold" + -1)
        break; 
    case "q":
        alert("Hold" + -1)
        break; 
    case "k":
        alert("Hold" + -1)
        break; 
    case "a":
        alert("Hold" + -1)
        break; 
}


}

