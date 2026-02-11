const libro = {
    titulo: "Jugamos a casarnos",
    autor: "Reyna Cariño",
    anio: 2013,
    estado: "disponible",
    capitulos: [],

    describirLibro: function () {
        console.log(
            "Libro titulado " +
            this.titulo +
            ", escrito por " +
            this.autor +
            " en el año " +
            this.anio +
            ", el estado es: " +
            this.estado
        );
    },

    agregarCapitulo: function (capitulo) {
        this.capitulos.push(capitulo);
    },

    eliminarCapitulo: function (capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
        this.capitulos.splice(index, 1);
        }
    }
};

libro.describirLibro();

libro.agregarCapitulo("Capítulo 1");
libro.agregarCapitulo("Capítulo 2");

console.log("Capítulos:", libro.capitulos);

libro.eliminarCapitulo("Capítulo 1");

console.log("Capítulos actualizados:", libro.capitulos);
