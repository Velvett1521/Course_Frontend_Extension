// ===== SINTAXIS GENERAL DE FUNCIONES =====
function nombre_de_la_funcion(parametro1, parametro2) {
    return "Valor a regresar"
}

// ===== EJEMPLO: SUMAR 2 NÚMEROS =====
function sumar(a, b) {
    return a + b;
}

console.log("Suma de 2 y 3:", sumar(2, 3));

// ===== SCOPE (ÁMBITO DE VARIABLES) =====
let persona = "Juan"

function escuela() {
    let estudiante = "Carlos";

    console.log("Dentro de escuela - persona:", persona)
    console.log("Dentro de escuela - estudiante:", estudiante)
}

escuela()
// console.log(estudiante) // Esto daría error (estudiante no está definido fuera)

let x = 1;

// ===== FUNCIONES FLECHA =====
let function_flecha = (a,b) => {
    return a + b
}

// Funciones con una sóla línea se simplifican
let function_normal = function(a, b) {
    return a + b
}

let function_como_variable = function(a, b) {
    return a + b
}

console.log("function_normal:", function_normal(2,3))
console.log("function_como_variable:", function_como_variable(2,3))
console.log("function_flecha:", function_flecha(2,3))

// ===== FUNCIONES FLECHA SIMPLIFICADAS =====
// Funciones con una sola línea (return implícito)
let funcion_simplificada = (a,b) => a + b

// Funciones con un solo parámetro (pueden omitir paréntesis)
let funcion_con_un_parametro = a => a * a

console.log("funcion_simplificada:", funcion_simplificada(2,3))
console.log("funcion_con_un_parametro:", funcion_con_un_parametro(2))

// ===== EJERCICIO CON VARIABLES GLOBALES =====
let x1 = 2
let y1 = 3
let z1 = 4

const func = (a, b, c) => {
    x1 = 1
    b = 2
    return a + b + c + x1
}

console.log("Ejercicio 1:", func(x1, y1, z1) + func(func(0,0,1),1,1))

// ===== FUNCIONES RECURSIVAS COMPLEJAS =====
let a = "a"
let b = "b"
let c = "c"

let fun1 = (v1, v2, v3) => {
    if(v1 == "m") {
        return "k"
    } else {
        return fun1("m", v1 + v2, v3)
    }
}

let fun2 = (v1, v2, v3) => {
    // Nota: Esta función tiene un error en la definición original
    // La versión corregida sería:
    return fun1(b, v1 + v2, v3)
}

console.log("Resultado fun1:", fun1(a, b, c))
// console.log(fun2(a, b, c)) // Esto causaría recursión infinita

// ===== RETO: FUNCIÓN RECURSIVA =====
let rec = (x) => {
    if(x % 2 == 0) {
        return x + 1
    } else {
        return rec(x + 2)
    }
}

console.log("rec(6):", rec(6))
console.log("rec(7):", rec(7))
console.log("rec(10):", rec(10))

// ===== MÁS EJEMPLOS DE FUNCIONES =====

// Función tradicional
function multiplicar(a, b) {
    return a * b
}

// Función flecha
const dividir = (a, b) => a / b

// Función con múltiples líneas
const operacionCompleja = (a, b, c) => {
    let temporal = a * b
    let resultado = temporal + c
    return resultado
}

console.log("Multiplicar:", multiplicar(4, 5))
console.log("Dividir:", dividir(10, 2))
console.log("Operación compleja:", operacionCompleja(2, 3, 4))

// ===== FUNCIONES CON PARÁMETROS POR DEFECTO =====
const saludar = (nombre = "Invitado") => {
    return "Hola " + nombre
}

console.log(saludar("Carlos"))
console.log(saludar())

// ===== FUNCIONES QUE LLAMAN A OTRAS FUNCIONES =====
const cuadrado = (x) => x * x
const sumaDeCuadrados = (a, b) => cuadrado(a) + cuadrado(b)

console.log("Suma de cuadrados:", sumaDeCuadrados(3, 4))

// ===== EJEMPLO DE CLOSURE =====
function crearContador() {
    let contador = 0
    return function() {
        contador++
        return contador
    }
}

let miContador = crearContador()
console.log("Contador 1:", miContador())
console.log("Contador 2:", miContador())
console.log("Contador 3:", miContador())


