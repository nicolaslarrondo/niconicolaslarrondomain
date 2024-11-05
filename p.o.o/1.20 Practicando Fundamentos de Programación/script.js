
function boton_1(){
    const nombre = prompt("Ingrese su nombre:");
    const apellidos = prompt("Ingrese sus apellidos:");
    const edad = prompt("Ingrese su edad:");
  

    alert(`hola señor ${nombre} ${apellidos} su edad es ${edad}`)
}
    
function boton_2(){

    const numero = parseFloat(prompt("Ingrese un número:"));

// Verificar que el valor ingresado es un número
if (!isNaN(numero)) {
  // Realizar las operaciones
  const parte = numero / 3;
  const resultado = (parte + 10) * 2;

  // Mostrar el resultado en pantalla
  alert(`El resultado es: ${resultado}`);

  // Imprimir el resultado en la consola (simulación de impresión)
  console.log(`Resultado para impresión: ${resultado}`);
} else {
  alert("Por favor, ingrese un número válido.");
}

}

function boton_3(){
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar que ambos valores ingresados son números
if (!isNaN(numero1) && !isNaN(numero2)) {
  if (numero1 < numero2) {
    alert("Los números están en orden creciente.");
  } else if (numero1 > numero2) {
    alert("Los números están en orden decreciente.");
  } else {
    alert("Ambos números son iguales.");
  }
} else {
  alert("Por favor, ingrese valores numéricos válidos.");
}
}

function boton_4(){
    // Inicializar un array para almacenar los números
const numeros = [];

// Leer 5 números ingresados por el usuario
for (let i = 1; i <= 5; i++) {
  const numero = parseFloat(prompt(`Ingrese el número ${i}:`));

  // Verificar que el valor ingresado es un número
  if (!isNaN(numero)) {
    numeros.push(numero);
  } else {
    alert("Por favor, ingrese un número válido.");
    i--; // Repetir el ciclo en caso de entrada inválida
  }
}

// Calcular el promedio de los números
const suma = numeros.reduce((acc, curr) => acc + curr, 0);
const promedio = suma / numeros.length;

// Mostrar el resultado en pantalla
alert(`El promedio de los números ingresados es: ${promedio}`);

// Imprimir el resultado en la consola (simulación de impresión)
console.log(`Resultado para impresión: ${promedio}`);
}

function boton_5(){

    const N = parseInt(prompt("Ingrese un número natural N:"));

    // Verificar que N es un número natural válido
    if (!isNaN(N) && N > 0) {
      // Calcular la suma de los N primeros números naturales
      const suma = (N * (N + 1)) / 2;
    
      // Mostrar el resultado en pantalla
      alert(`La suma de los primeros ${N} números naturales es: ${suma}`);
    
      // Imprimir el resultado en la consola (simulación de impresión)
      console.log(`Resultado para impresión: ${suma}`);
    } else {
      alert("Por favor, ingrese un número natural válido.");
    }

}


function boton_6(){
    let numerosPares = "";

// Usar un bucle para generar los primeros 100 números pares
for (let i = 1; i <= 100; i++) {
  const numeroPar = i * 2;
  numerosPares += numeroPar + " ";
}


alert("Los primeros 100 números pares son:" + numerosPares)
// Mostrar los números pares en la consola

}

function boton_7(){

    let numerosImpares = "";

// Usar un bucle para generar los primeros 100 números impares
for (let i = 0; i < 100; i++) {
  const numeroImpar = i * 2 + 1;
  numerosImpares += numeroImpar + " ";
}

alert("Los primeros 100 números impares son:" + numerosImpares)
// Mostrar los números impares en la consola

}

function boton_8(){
    let sumaTotal = 0;

// Leer 100 números del usuario
for (let i = 1; i <= 100; i++) {
  const numero = parseFloat(prompt(`Ingrese el número ${i}:`));

  // Verificar que el valor ingresado es un número
  if (!isNaN(numero)) {
    sumaTotal += numero;
  } else {
    alert("Por favor, ingrese un número válido.");
    i--; // Repetir la entrada en caso de valor inválido
  }
}

// Mostrar el resultado en pantalla
alert(`La suma de los 100 números ingresados es: ${sumaTotal}`);

// Imprimir el resultado en la consola (simulación de impresión)
alert(`Resultado para impresión: ${sumaTotal}`);
}

function boton_9(){
    const N = parseInt(prompt("Ingrese la cantidad de números a sumar (N):"));

// Verificar que N es un número natural válido
if (!isNaN(N) && N > 0) {
  // Inicializar la variable para la suma
  let sumaTotal = 0;

  // Leer N números del usuario
  for (let i = 1; i <= N; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i}:`));

    // Verificar que el valor ingresado es un número
    if (!isNaN(numero)) {
      sumaTotal += numero;
    } else {
      alert("Por favor, ingrese un número válido.");
      i--; // Repetir la entrada en caso de valor inválido
    }
  }

  // Mostrar el resultado en pantalla
  alert(`La suma de los ${N} números ingresados es: ${sumaTotal}`);

  // Imprimir el resultado en la consola (simulación de impresión)
  console.log(`Resultado para impresión: ${sumaTotal}`);
} else {
  alert("Por favor, ingrese un número natural válido.");
}
}

function boton_10(){
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar que ambos valores ingresados son números
if (!isNaN(numero1) && !isNaN(numero2)) {
  // Solicitar al usuario que elija una operación
  const operacion = prompt("Elija una operación: \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir");

  let resultado;

  // Realizar la operación según la opción elegida
  switch (operacion) {
    case '1':
      resultado = numero1 + numero2;
      alert(`La suma de ${numero1} y ${numero2} es: ${resultado}`);
      break;
    case '2':
      resultado = numero1 - numero2;
      alert(`La resta de ${numero1} y ${numero2} es: ${resultado}`);
      break;
    case '3':
      resultado = numero1 * numero2;
      alert(`La multiplicación de ${numero1} y ${numero2} es: ${resultado}`);
      break;
    case '4':
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
        alert(`La división de ${numero1} entre ${numero2} es: ${resultado}`);
      } else {
        alert("Error: No se puede dividir entre cero.");
      }
      break;
    default:
      alert("Opción no válida. Por favor, elija 1, 2, 3 o 4.");
  }
} else {
  alert("Por favor, ingrese números válidos.");
}
}

function boton_11(){
    const N = parseInt(prompt("Ingrese la cantidad de números pares a sumar (N):"));

// Verificar que N es un número natural válido
if (!isNaN(N) && N > 0) {
  // Inicializar la variable para la suma
  let sumaTotal = 0;
  let numerosParesContados = 0; // Para contar cuántos números pares se han ingresado

  // Leer N números pares del usuario
  while (numerosParesContados < N) {
    const numero = parseFloat(prompt(`Ingrese el número par ${numerosParesContados + 1}:`));

    // Verificar que el valor ingresado es un número y que es par
    if (!isNaN(numero) && numero % 2 === 0) {
      sumaTotal += numero;
      numerosParesContados++;
    } else {
      alert("Por favor, ingrese un número par válido.");
    }
  }

  // Mostrar el resultado en pantalla
  alert(`La suma de los ${N} números pares ingresados es: ${sumaTotal}`);

  // Imprimir el resultado en la consola (simulación de impresión)
  console.log(`Resultado para impresión: ${sumaTotal}`);
} else {
  alert("Por favor, ingrese un número natural válido.");
}
}

function boton_12(){
    // Solicitar al usuario el valor de N
const N = parseInt(prompt("Ingrese la cantidad de números pares a sumar (N):"));

// Verificar que N es un número natural válido
if (!isNaN(N) && N > 0) {
  // Inicializar la suma
  let sumaTotal = 0;

  // Calcular la suma de los primeros N números pares
  for (let i = 0; i < N; i++) {
    const numeroPar = i * 2; // Generar el i-ésimo número par
    sumaTotal += numeroPar; // Sumarlo a la suma total
  }

  // Mostrar el resultado en pantalla
  alert(`La suma de los primeros ${N} números pares es: ${sumaTotal}`);

  // Imprimir el resultado en la consola (simulación de impresión)
  console.log(`Resultado para impresión: ${sumaTotal}`);
} else {
  alert("Por favor, ingrese un número natural válido.");
}
}

function boton_13(){
    const N = parseInt(prompt("Ingrese la cantidad de números impares a sumar (N):"));

// Verificar que N es un número natural válido
if (!isNaN(N) && N > 0) {
  // Inicializar la variable para la suma
  let sumaTotal = 0;
  let numerosImparesContados = 0; // Para contar cuántos números impares se han ingresado

  // Leer N números impares del usuario
  while (numerosImparesContados < N) {
    const numero = parseFloat(prompt(`Ingrese el número impar ${numerosImparesContados + 1}:`));

    // Verificar que el valor ingresado es un número y que es impar
    if (!isNaN(numero) && numero % 2 !== 0) {
      sumaTotal += numero;
      numerosImparesContados++;
    } else {
      alert("Por favor, ingrese un número impar válido.");
    }
  }

  // Mostrar el resultado en pantalla
  alert(`La suma de los ${N} números impares ingresados es: ${sumaTotal}`);

  // Imprimir el resultado en la consola (simulación de impresión)
  console.log(`Resultado para impresión: ${sumaTotal}`);
} else {
  alert("Por favor, ingrese un número natural válido.");
}
}

function boton_14(){
    const N = parseInt(prompt("Ingrese la cantidad de números impares a sumar (N):"));

// Verificar que N es un número natural válido
if (!isNaN(N) && N > 0) {
  // Inicializar la suma
  let sumaTotal = 0;

  // Calcular la suma de los primeros N números impares
  for (let i = 0; i < N; i++) {
    const numeroImpar = i * 2 + 1; // Generar el i-ésimo número impar
    sumaTotal += numeroImpar; // Sumarlo a la suma total
  }

  // Mostrar el resultado en pantalla
  alert(`La suma de los primeros ${N} números impares es: ${sumaTotal}`);

  // Imprimir el resultado en la consola (simulación de impresión)
  console.log(`Resultado para impresión: ${sumaTotal}`);
} else {
  alert("Por favor, ingrese un número natural válido.");
}
}

function boton_15(){
    // Solicitar al usuario el valor de N
const N = parseInt(prompt("Ingrese la cantidad de múltiplos de 3 a sumar (N):"));

// Verificar que N es un número natural válido
if (!isNaN(N) && N > 0) {
  // Inicializar la suma
  let sumaTotal = 0;

  // Calcular la suma de los primeros N múltiplos de 3
  for (let i = 1; i <= N; i++) {
    const multiploDeTres = i * 3; // Generar el i-ésimo múltiplo de 3
    sumaTotal += multiploDeTres; // Sumarlo a la suma total
  }

  // Mostrar el resultado en pantalla
  alert(`La suma de los primeros ${N} múltiplos de 3 es: ${sumaTotal}`);

  // Imprimir el resultado en la consola (simulación de impresión)
  console.log(`Resultado para impresión: ${sumaTotal}`);
} else {
  alert("Por favor, ingrese un número natural válido.");
}
}

function boton_16(){
console.log("+--------------------+")
console.log("|       Inicio       |")
console.log("+--------------------+")
          console.log("|")
          console.log("v")
console.log("+--------------------+")
console.log("|  Ingresar N (n)    |")
console.log("+--------------------+")
          console.log("|")
          console.log("v")
console.log("+--------------------+")
console.log("|  factorial = 1     |")
console.log("|  i = 1             |")
console.log("+--------------------+")
          console.log("|")
          console.log("v")
console.log("+--------------------------+")
console.log("|  i <= N ?               |")
console.log("|  (¿i menor o igual a N?)|")
console.log("+--------------------------+")
          console.log("| Yes")
          console.log("|   ")   
          console.log("v")
console.log("+--------------------+")
console.log("|  factorial = factorial * i |")
console.log("+--------------------+")
         console.log(" |")
         console.log(" |")
          console.log("v")
console.log("+--------------------+")
console.log("|  i = i + 1        |")
console.log("+--------------------+")
         console.log(" |")
         console.log(" v")
console.log("+--------------------------+")
console.log("|  i <= N ?               |")
console.log("|  (¿i menor o igual a N?)|")
console.log("+--------------------------+")
          console.log("| No")
          console.log("|")
          console.log("v")
console.log("+--------------------+")
console.log("|  Mostrar factorial  |")
console.log("+--------------------+")
          console.log("|")
          console.log("v")
console.log("+--------------------+")
console.log("|        Fin         |")
console.log("+--------------------+")
}

function boton_17(){


    const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

// Paso 2: Convertir a Fahrenheit
const fahrenheit = (celsius * (9 / 5)) + 32;

// Paso 3: Mostrar el resultado
alert(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);
}

function boton_18(){

    const frase = prompt("Ingrese una frase:");

    // Paso 2: Dividir la frase en palabras
    const palabras = frase.split(" "); // Divide la frase por espacios
    
    // Paso 3: Inicializar la variable para la palabra más larga
    let palabraMasLarga = "";
    
    // Paso 4: Recorrer las palabras
    for (const palabra of palabras) {
        // Si la longitud de la palabra actual es mayor que la longitud de la palabra más larga
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra; // Actualizar la palabra más larga
        }
    }
    
    // Paso 5: Mostrar el resultado
    alert(`La palabra más larga es: "${palabraMasLarga}"`);

}

function boton_19(){

    const limite = parseInt(prompt("Ingrese un número entero positivo (N):"));

    // Verificar que el límite es un número válido
    if (!isNaN(limite) && limite > 1) {
      // Paso 2: Inicializar una lista de primos
      const primos = [];
    
      // Paso 3: Recorrer los números desde 2 hasta N
      for (let i = 2; i <= limite; i++) {
        let esPrimo = true; // Inicializar como primo
    
        // Verificar la primalidad
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            esPrimo = false; // No es primo
            break; // Salir del bucle
          }
        }
    
        // Si es primo, agregar a la lista
        if (esPrimo) {
          primos.push(i);
        }
      }
    
      // Paso 4: Mostrar los números primos
      alert(`Los números primos menores o iguales a ${limite} son: ${primos.join(", ")}`);
    } else {
      alert("Por favor, ingrese un número entero positivo mayor que 1.");
    }

}

function boton_20(){

    function contarCaracteres(cadena) {
        // Crear un objeto para almacenar la cantidad de caracteres
        const contador = {};
    
        // Recorrer cada carácter en la cadena
        for (const caracter of cadena) {
            // Si el carácter ya está en el objeto, incrementar su contador
            if (contador[caracter]) {
                contador[caracter]++;
            } else {
                // Si no está, inicializar su contador en 1
                contador[caracter] = 1;
            }
        }
    
        // Retornar el objeto con el conteo de caracteres
        return contador;
    }
    
    // Ejemplo de uso:
    const texto = "hola mundo";
    const resultado = contarCaracteres(texto);
    alert("inpecionar")
    console.log(resultado);
}

function boton_21(){

    const N = parseInt(prompt("Ingrese la cantidad de números que desea ingresar (N):"));

    // Verificar que N es un número válido
    if (!isNaN(N) && N > 0) {
        // Paso 2: Inicializar un arreglo para almacenar los números
        const numeros = [];
    
        // Paso 3: Leer N números
        for (let i = 0; i < N; i++) {
            const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
            numeros.push(numero); // Agregar el número al arreglo
        }
    
        // Paso 4: Filtrar y almacenar los números pares
        const pares = numeros.filter(num => num % 2 === 0); // Filtrar los pares
    
        // Paso 5: Mostrar los números pares
        alert(`Los números pares son: ${pares.join(", ")}`);
    } else {
        alert("Por favor, ingrese un número válido mayor que 0.");
    }

}