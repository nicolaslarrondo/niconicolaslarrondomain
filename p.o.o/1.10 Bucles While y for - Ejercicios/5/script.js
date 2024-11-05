

function encontrarPrimerosPares(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const n = parseInt(document.getElementById("numero").value); // Obtener el valor de N
    const pares = []; // Arreglo para almacenar los números pares

    // Bucle for para encontrar los primeros N números pares
    for (let i = 0; i < n; i++) {
        pares.push(i * 2); // Agregar el número par al arreglo (0, 2, 4, ...)
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = `Los primeros ${n} números pares son: ${pares.join(', ')}`;
}

// Event listener para el formulario
document.getElementById("numeroForm").addEventListener("submit", encontrarPrimerosPares);
// Event listener para el botón
