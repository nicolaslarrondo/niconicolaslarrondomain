
let displayValue = '', operations = [];
let re = document.querySelector("#display");
let igual = document.getElementById("resultado");
function press(id) {
    // id se agrega constante mente a la pantalla
      re.innerHTML += id; 
      //y tambien se almasen en una variable vasia
      displayValue += id;
}
function setOP(op) {
    if (displayValue !== '') {
        operations.push(parseFloat(displayValue));
        //se agregara los elemento de las operaciones como suma resta 
        operations.push(op);
        displayValue = '';    
        re.innerHTML = operations.join(' ');
    }
}
igual.onclick = function() {
    if (displayValue !== '') {
        operations.push(parseFloat(displayValue));
    } 
    //aqui se tomara el primer elemento del array para aser las operaciones
    let resultado = operations[0];
    for (let i = 1; i < operations.length; i += 2) {   
        //se usara el op anteriormente ingresado para determinar que operacion se deve ejecutar
        const op = operations[i];
        // se tomara el segundo numero para aser las operaciones
        const nextNumber = operations[i + 1];  

        if (op === '*') {
            resultado *= nextNumber;
        } else if (op === '/') {
            resultado /= nextNumber;
        } else if (op === '+') {
            resultado += nextNumber;
        } else if (op === '-') {
            resultado -= nextNumber;
        }
    }   
    re.innerHTML = resultado;
    operations = []; // Reiniciar con el resultado
    displayValue = resultado;
};
//se borrara todo
function clr() {
    displayValue = '';
    operations = [];
    re.innerHTML = '';
}