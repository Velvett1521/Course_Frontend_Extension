// tipos-de-dato.js
// Ejemplos de tipos de datos en JavaScript

console.log("=== Valores solicitados ===");

// Number
console.log(typeof 42);        // number
console.log(typeof -666);      // number
console.log(typeof 0);         // number

// String
console.log(typeof 'Veinticinco'); // string
console.log(typeof '');            // string

// Boolean
console.log(typeof true);      // boolean

// null (ojo: bug histórico de JS)
console.log(typeof null);      // object

// undefined
console.log(typeof undefined); // undefined

const FALSE = false;
console.log(typeof FALSE);     // boolean

console.log("=== Ejemplos extra ===");

// Más números
console.log(typeof 3.14);      // number
console.log(typeof NaN);       // number (aunque no lo parezca)

// Strings
console.log(typeof "123");     // string
console.log(typeof `Hola JS`); // string

// Booleanos
console.log(typeof false);     // boolean

// Objetos
console.log(typeof {});        // object
console.log(typeof []);        // object (los arreglos son objetos)

// Funciones
console.log(typeof function () {}); // function

// Symbols
console.log(typeof Symbol("id"));   // symbol

// BigInt
console.log(typeof 9007199254740991n); // bigint
