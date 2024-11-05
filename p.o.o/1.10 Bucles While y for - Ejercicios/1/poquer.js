
function mostrarNumerosDe5En5() {
    const numeroLista = document.getElementById("numeroLista");
    numeroLista.innerHTML = ''; // Limpiar la lista antes de mostrar los números

    let numero = 0; // Iniciar desde 0

    // Bucle para agregar números de 5 en 5
    while (numero <= 100) {
        agregarNumeroALaLista(numero, numeroLista);
        numero += 5; // Incrementar el número en 5
    }
}

// Función para agregar un número a la lista
function agregarNumeroALaLista(numero, lista) {
    const li = document.createElement('li'); // Crear un nuevo elemento li
    li.textContent = numero; // Establecer el texto del li
    lista.appendChild(li); // Agregar el li a la lista
}

// Event listener para el botón
document.getElementById("mostrarBtn").addEventListener("click", mostrarNumerosDe5En5);