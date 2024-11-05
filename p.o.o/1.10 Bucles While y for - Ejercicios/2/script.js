

// Función para calcular la suma del 1 al 10
function calcularSuma() {
    let suma = 0; // Variable para almacenar la suma
    let contador = 1; // Contador inicial en 1

    // Bucle while para sumar los números del 1 al 10
    while (contador <= 10) {
        suma += contador; // Agregar el contador a la suma
        contador++; // Incrementar el contador
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = `La suma de los números del 1 al 10 es: ${suma}`;
}

// Event listener para el botón
document.getElementById("calcularBtn").addEventListener("click", calcularSuma);
// Event listener para el botón
