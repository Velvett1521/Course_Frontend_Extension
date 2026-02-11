const form = document.getElementById("formComentario");
const input = document.getElementById("comentario");
const lista = document.getElementById("listaComentarios");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = input.value;
    const fecha = new Date().toLocaleString();

    const comentario = document.createElement("div");
    comentario.className = "comentario";
    comentario.innerHTML = `
    <p>${texto}</p>
    <span>${fecha}</span>
    <button>Eliminar</button>
  `;

    comentario.querySelector("button").addEventListener("click", function () {
        comentario.remove();
    });

    lista.appendChild(comentario);
    input.value = "";
});
