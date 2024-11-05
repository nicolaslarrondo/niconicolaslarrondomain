




function modificarMensaje (){
let mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];  
let mensajeInicial2 = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];    
let eliminar = [];
eliminar.push(mensajeInicial.shift(),mensajeInicial.shift(), mensajeInicial.pop(),mensajeInicial.pop(),mensajeInicial.pop() )
let valores_agregados1 = [(mensajeInicial.unshift("nosotros"), mensajeInicial.unshift("somos"),mensajeInicial.push("los"),mensajeInicial.push("mejores"),mensajeInicial.push("del"),mensajeInicial.push("mundo"))];
let valores_agregados = ["nosotros","somos","los","mejores","del","mundo"];
alert(`el mensaje inicial es: ${mensajeInicial2}\n el mensaje final es: ${mensajeInicial} \nlos valores eliminados son: ${eliminar} \nlos mensajes agregados son: ${valores_agregados}`);
};

function operandoMetodos(){
let numeros = [1,2,10,50,35,21,25,63,97,27];
let numeros2 = [2,5,10,50,35,21,25,63,97,27];
let suma;
let numeros_eliminados = [];
let numeros_agregados = [];
numeros_eliminados.push(numeros2.shift(),numeros2.shift(),numeros2.shift(),numeros2.pop(),numeros2.pop(),numeros2.pop());
numeros_agregados.push(numeros2.unshift(5),numeros2.unshift(9),numeros2.unshift(3),numeros2.push(83),numeros2.push(46),numeros2.push(0)); 

suma = 2+5+10+50+35+21+25+63+97+27; 

alert(`el numero original es:${numeros}\nlos cambios son{\n quitar el 1 2 y 10 con shift tambien quitar 63 97 y 27\n canbiarlos por 3 9 y 5 con unshift tambien agregar 83 46 y 0 con pop\n}\nel numero quedo asi:${numeros2}\n y la suma de todos los numeros es ${suma}`)

}