
function cuentaClicks(event) {
    let input = document.querySelector("#entrada").value
    alert(input)
}

window.onload = function() {
    let elboton = document.querySelector("#crear")
    elboton.addEventListener("click", cuentaClicks)
    
}