

document.addEventListener("DOMContentLoaded", function () {
    // Función para encontrar el número mayor
    function encontrarMayor(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const numeros = []; // Arreglo para almacenar los números ingresados

        // Recoger los números del formulario
        for (let i = 1; i <= 5; i++) {
            const numero = parseFloat(document.getElementById(`numero${i}`).value);
            numeros.push(numero); // Agregar el número al arreglo
        }

        let mayor = numeros[0]; // Inicializar el mayor con el primer número

        // Bucle for para encontrar el número mayor
        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > mayor) {
                mayor = numeros[i]; // Actualizar mayor si se encuentra uno mayor
            }
        }

        // Mostrar el resultado en la página
        document.getElementById("resultado").textContent = `El número mayor es: ${mayor}`;
    }

    // Event listener para el formulario
    document.getElementById("numeroForm").addEventListener("submit", encontrarMayor);
});
// Event listener para el botón
