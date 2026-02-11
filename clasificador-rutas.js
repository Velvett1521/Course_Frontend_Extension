const frutas = [
    "manzana",
    "plátano",
    "naranja",
    "manzana",
    "pera",
    "plátano",
    "manzana",
    "uva",
    "pera"
];

const conteo = {};

// usando for
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];

    if (conteo[fruta]) {
        conteo[fruta]++;
    } else {
        conteo[fruta] = 1;
    }
}

console.log("Conteo con for:");
console.log(conteo);

// usando while
const conteoWhile = {};
let i = 0;

while (i < frutas.length) {
    const fruta = frutas[i];

    if (conteoWhile[fruta]) {
        conteoWhile[fruta]++;
    } else {
        conteoWhile[fruta] = 1;
    }

    i++;
}

console.log("Conteo con while:");
console.log(conteoWhile);
