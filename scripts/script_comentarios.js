const form = document.getElementById("commentForm");
const input = document.getElementById("commentInput");
const list = document.getElementById("commentsList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = input.value;
    const date = new Date().toLocaleString();

    const comment = document.createElement("div");
    comment.className = "comment";

    comment.innerHTML = `
    <p>${text}</p>
    <span>${date}</span><br>
    <button>Eliminar</button>
  `;

    comment.querySelector("button").addEventListener("click", function () {
        comment.remove();
    });

    list.appendChild(comment);
    input.value = "";
});
