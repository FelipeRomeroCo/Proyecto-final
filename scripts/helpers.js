// Àgrega animación de ingreso al formulario

let boton = document.getElementById("newTask")
let formulario = document.getElementById("formElement")

boton.addEventListener("click", () => {
    formulario.classList.add("active")
})

let botonCancelar = document.getElementById("cancelForm")

botonCancelar.addEventListener ("click" , () => {
    formulario.classList.remove("active")
})