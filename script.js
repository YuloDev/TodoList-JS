const title = document.getElementById("title");
const description = document.getElementById("description");
const btn_añadir = document.getElementById("add");
const table = document.getElementById("table");
const btn_borrar = document.getElementById("delete");

window.addEventListener("DOMContentLoaded", () => {

    añadirTarea();
    borrarTarea();


})

function añadirTarea() {
    btn_añadir.onclick = () => {
        const titleText = title.value;
        const descriptionText = description.value;
        if (title.value == "" || description.value == "") {
            alert("se necesita un titulo y una descripcion")
        }else{
            const content = document.createElement("tr");
            content.innerHTML = `
        <td>${titleText}</td>
        <td>
          ${descriptionText}
        </td>
        <td><input type="checkbox" name="" id="" /></td>
        <td><button class="btn btn-primary">editar</button></td>
        <td><button class="btn btn-danger">borrar</button></td>
      </tr>`;
            table.appendChild(content);
        }
        
        return false;
    };
}

function borrarTarea() {
    btn_borrar.onclick = () => {
        
        return false
    }
}