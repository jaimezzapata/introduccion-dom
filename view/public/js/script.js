/* Selectores 
getElement
    getElementById -> Selecciona elemento por un id
    getElementsByClassName -> Selecciona elementos por clase
    getElementsByTagName -> Selecciona elemento por nombre de etiqueta
    
querySelector
    querySelector -> Permite seleccionar por id, por clase y por etiqueta
    querySelectorAll -> Permite seleccionar por id, por clase y por etiqueta
*/

// console.log(document.getElementById("usuario")) /* Solo muestra un elemento */
// console.log(document.getElementsByClassName("form")) /* Siempre muestra un arreglo */
// console.log(document.getElementsByTagName("form")) /* Siempre muestra un arreglo */

// console.log(document.querySelector("form"))
// console.log(document.querySelectorAll("form"))
import { buscarUsuario } from "../../../controller/ControllerUsuarios.js"
import { listarRecetasNoVegetarianas, listarRecetasVegetarianas, filtrarPorDificultad, filtrarPorTipo, filtrarPorNombre } from "../../../controller/ControllerRecetas.js"
let btnIniciar = document.querySelector('#btnIniciar')
if (btnIniciar) {
    btnIniciar.addEventListener('click', iniciarSesion)
    function iniciarSesion() {
        if (buscarUsuario()) {
            window.location.href = '/view/pages/home.html'
        } else {
            console.log('Error de credenciales')
        }
    }
}
let vegetarianas = document.getElementById('vegetarianas')
if (vegetarianas) {
    vegetarianas.addEventListener('click', () => {
        listarRecetasVegetarianas()
    })
}
let noVegetarianas = document.getElementById('no-vegetarianas')
if (noVegetarianas) {
    noVegetarianas.addEventListener('click', () => {
        listarRecetasNoVegetarianas()
    })
}
let cerrarSesion = document.getElementById('cerrar-sesion')
if (cerrarSesion) {
    cerrarSesion.addEventListener('click', () => {
        window.location.href = '/index.html'
    })
}

let inputs = document.querySelectorAll('form input')
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        switch (e.target.name) {
            case 'nombre':
                filtrarPorNombre(e.target.value)
                break;
            case 'dificultad':
                filtrarPorDificultad()
                break;
            case 'tipo':
                filtrarPorTipo()
                break;
        }
        console.log(e)
    })
})



// let iniciarSesion = function () { /* Función de expresión */
//     let usuario = document.querySelector('#usuario')
//     let contrasena = document.querySelector('#contrasena')
//     console.log(usuario)
//     console.log(contrasena)
//     console.log('Iniciar Sesión')
// }
// iniciarSesion()




// console.log(usuario)