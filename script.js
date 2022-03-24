  const title = document.getElementById("title");
  const descripcion = document.getElementById("descripcion");
  const tbody = document.querySelector("#tbody");
  let contador = 1;

function agregar() {
  let content = `
  <th scope="row">${contador++}</th>
  <td>${title.value}</td>
  <td>${descripcion.value}</td>
  <td>
  <div class="container">
  <button type="button" class="btn btn-success mb-2 my-4" id="btn-agregar" onclick="">Editar</button>
  <button type="button" class="btn btn-danger mb-2 my-4" id="btn-agregar" onclick="eliminar()">Eliminar</button>
  </div>
  </td>
  `;
  const child = document.createElement("tr");
  child.innerHTML = content;
  tbody.append(child);
}


function eliminar() {
  tbody.remove(tbody.lastChild)
}