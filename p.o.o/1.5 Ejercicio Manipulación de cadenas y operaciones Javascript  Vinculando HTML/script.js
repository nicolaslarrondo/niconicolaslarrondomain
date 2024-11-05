console.log("Vinculado correctamente...");

// Ejercicio 1: Declaración de variables
function declararVariables() {
    const ahora = 2023; // Año actual
    const fecha_nac = 2004; // Año de nacimiento
    const edad = ahora - fecha_nac; // Cálculo de la edad
    alert("Tu edad es: " + edad); // Muestra la edad en una alerta
}

// Ejercicio 2: Asignación de valores
function asignarValores() {
    const var1 = 25; // Valor asignado a var1
    const var2 = var1; // Asignando el valor de var1 a var2
    alert("El valor de var2 es: " + var2); // Muestra el valor de var2
}

// Ejercicio 3: Operaciones matemáticas
function realizarOperaciones() {
    const num1 = 10; // Primer número
    const num2 = 5; // Segundo número
    const num3 = 15; // Tercer número
    const suma = num1 + num2 + num3; // Suma de num1, num2 y num3
    const resta = num3 - num1; // Resta de num3 menos num1
    const multiplicacion = num2 * num3; // Multiplicación de num2 por num3
    const division = num1 / 120; // División de num1 entre 120

    alert("Suma: " + suma + "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division);
}

// Ejercicio 4: Manipulación de cadenas
function manipularCadenas() {
    const direccion = "Calle Principal"; // Dirección
    const n_casa = 123; // Número de casa
    const mensaje = "Vivo en " + direccion + " número " + n_casa; // Construcción del mensaje
    const longitud = mensaje.length; // Longitud del mensaje
    const antepenultimo = mensaje[mensaje.length - 3]; // Antepenúltimo carácter

    alert("Mensaje: " + mensaje + "\nLongitud: " + longitud + "\nAntepenúltimo carácter: " + antepenultimo);
}