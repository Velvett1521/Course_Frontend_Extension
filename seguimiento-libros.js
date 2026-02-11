const librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log("- " + librosLeidos[i]);
    }
}

agregarLibro("Jugamos a ser novios");
agregarLibro("Te espero en el fin del mundo");
agregarLibro("Jugamos a casarnos");

mostrarLibrosLeidos();
