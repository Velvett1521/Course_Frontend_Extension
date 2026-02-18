// var, let, const.

// Uso de var (o nada)
var nombre = "AURORA ";
// Es exactamente lo mismo que...
nombre = "AURORA ";
var nombre = "AURORA ";

// Uso de let
let apellido = "Aksnes";
// let apellido = "Bravo"; // Esto daría error (no se puede redeclarar con let)

// Uso const
const ci = "1234567"; // Completa la declaración

console.log(nombre);
console.log(apellido);
console.log(ci);


let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

a++;
console.log(a);

b--;
console.log(b);


// Combinados

// Suma e igual +=
let suma = 5;
suma += 4; // suma = suma + 4
console.log(suma); // 9

let nombre_completo = "Mackaber";
nombre_completo += " Wictkin"; // nombre_completo = nombre_completo + " Wictkin"
console.log(nombre_completo); // "Mackaber Wictkin"

// Resta e igual -=
let resta = 5;
resta -= 1; // resta = resta - 1
console.log(resta); // 4

// igualdad débil ==
console.log("1 == 1", 1 == 1); // true
console.log('0 == ""', 0 == ""); // Da true, aunque no sea el mismo tipo de dato

// igualdad estricta ===
console.log("1 === 1", 1 === 1); // true
console.log('0 === ""', 0 === ""); // Revisa que sea el mismo tipo de dato (false)

// desigualdad débil !=
console.log("1 != 2", 1 != 2); // true
console.log("undefined != null", undefined != null); // Da false, porque son considerados iguales en igualdad débil

// desigualdad estricta !==
console.log("1 !== 2", 1 !== 2); // true
console.log("undefined !== null", undefined !== null); // Da true, porque son tipos diferentes


// AND (y) &&
console.log("true && true", true && true); // true
console.log("5 < 10 && 5 > 2", 5 < 10 && 5 > 2); // true
console.log("5 < 10 && 5 > 20", 5 < 10 && 5 > 20); // false

// OR (o) ||
console.log("true || true", true || true); // true
console.log("true || false", true || false); // true
console.log("false || false", false || false); // false