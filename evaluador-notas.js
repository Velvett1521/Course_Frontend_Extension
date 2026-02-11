let nota = Math.floor(Math.random() * 101); //Conozco el randomizador por mis clases de la prepa en programacion web

if (nota) {
    console.log("Nota del estudiante:", nota);

    if (nota >= 90) {
        console.log("Resultado: Excelente");
    } else if (nota >= 75) {
    console.log("Resultado: Bien");
    } else if (nota >= 60) {
        console.log("Resultado: Suficiente");
    } else {
        console.log("Resultado: No aprueba");
    }
} else {
    console.log("Nota inválida o igual a 0:", nota);
}
