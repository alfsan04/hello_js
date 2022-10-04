
function addRow(event) {
    const texto = document.querySelector("#entrada").value
    const tabla = document.querySelector("#la_tabla")
    const fila = document.createElement("tr")
    const celda = document.createElement("td")
    celda.innerHTML = texto

    fila.appendChild(celda)
    tabla.appendChild(fila)
}

window.onload = function() {
    let elboton = document.querySelector("#crear")
    elboton.addEventListener("click", addRow)
    
}