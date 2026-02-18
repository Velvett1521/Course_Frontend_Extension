// Arreglos
let nombres = ["Mackaber", "Andrea", "Alejandra", "Adrian"];

// Nombre en la posición 0
console.log(nombres[0]);

// Nombre en la posición 3
console.log(nombres[3]);

// Arreglo completo
console.log(nombres);

// Métodos de arreglos

// push() - Agrega al final
nombres.push("Diego");
console.log(nombres);

// pop() - Quita el último elemento
nombres.pop();
console.log(nombres);

// pop() nuevamente
nombres.pop();
console.log(nombres);

// unshift() - Agrega al inicio
nombres.unshift("Diego");
console.log(nombres);

// shift() - Quita el primer elemento
nombres.shift();
console.log(nombres);

// sort() - Ordenar arreglos
let numeros = [1, 6, 4, 7, 8, 3, 2, 11, 33];

// Por defecto lo hace por orden alfabético
numeros.sort();
console.log("Orden alfabético:", numeros);

// Ordenar de forma numérica
numeros.sort((a, b) => a - b);
console.log("Orden numérico:", numeros);

// map() - NO MODIFICA EL ARREGLO ORIGINAL
let numeros_por_2 = numeros.map(a => a * 2);
console.log("Original:", numeros);
console.log("Multiplicado por 2:", numeros_por_2);

console.log("Usando for---");
let animales = ["🐏", "🐎", "🐑", "🐍"];
for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
    console.log(i);
}

// Es equivalente a...
console.log("Usando if's---");

let i = 0;
if (i < animales.length) { // animales.length = 4
    console.log(animales[0]);
    i++;
}
// i == 1

if (i < animales.length) { // animales.length = 4
    console.log(animales[1]);
    i++;
}
// i == 2

if (i < animales.length) { // animales.length = 4
    console.log(animales[2]);
    i++;
}
// i == 3

if (i < animales.length) { // animales.length = 4
    console.log(animales[3]);
    i++;
}
// i == 4

if (i < animales.length) { // animales.length = 4, i = 4 (ya no se cumple)
    console.log(animales[4]); // No se ejecuta
    i++;
}
