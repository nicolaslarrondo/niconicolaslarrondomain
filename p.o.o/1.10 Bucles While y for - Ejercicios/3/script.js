

function calcularPrimerosPares() {
    let pares = []; // Arreglo para almacenar los números pares
    let contador = 0; // Contador para los números pares
    let numero = 0; // Inicializar el número en 0

    // Bucle while para encontrar los primeros 10 números pares
    while (contador < 10) {
        pares.push(numero); // Agregar el número par al arreglo
        numero += 2; // Incrementar el número en 2 para obtener el siguiente par
        contador++; // Incrementar el contador
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = `Los primeros 10 números pares son: ${pares.join(', ')}`;
}

// Event listener para el botón
document.getElementById("calcularBtn").addEventListener("click", calcularPrimerosPares);
// Event listener para el botón
