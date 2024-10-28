import { recetasVegetarianas, recetasNoVegetarianas } from "../model/ModelRecetas.js";

export function listarRecetasVegetarianas() {
    document.getElementById('contenido').innerHTML = ''
    recetasVegetarianas.map((recetaVegetariana) => {
        let contendor = document.createElement('div')
        let nombre = document.createElement('p')
        let ingredientes = document.createElement('ul')
        let tiempo = document.createElement('p')
        let dificultad = document.createElement('p')
        let tipo = document.createElement('p')
        nombre.textContent = 'Nombre: ' + recetaVegetariana.nombre
        ingredientes.textContent = 'Ingredientes: ' + recetaVegetariana.ingredientes
        console.log(recetaVegetariana.ingredientes)
        tiempo.textContent = 'Tiempo preparación: ' + recetaVegetariana.tiempoPreparacion
        dificultad.textContent = 'Dificultad: ' + recetaVegetariana.dificultad
        tipo.textContent = 'Tipo: ' + recetaVegetariana.tipoComida
        contendor.append(nombre, ingredientes, tiempo, dificultad, tipo)
        document.getElementById('contenido').append(contendor)
    })
}

export function listarRecetasNoVegetarianas() {
    document.getElementById('contenido').innerHTML = ''
    recetasNoVegetarianas.map((recetaNoVegetariana) => {
        let contendor = document.createElement('div')
        let nombre = document.createElement('p')
        let ingredientes = document.createElement('ul')
        let tiempo = document.createElement('p')
        let dificultad = document.createElement('p')
        let tipo = document.createElement('p')
        nombre.textContent = 'Nombre: ' + recetaNoVegetariana.nombre
        ingredientes.textContent = 'Ingredientes: ' + recetaNoVegetariana.ingredientes
        tiempo.textContent = 'Tiempo preparación: ' + recetaNoVegetariana.tiempoPreparacion
        dificultad.textContent = 'Dificultad: ' + recetaNoVegetariana.dificultad
        tipo.textContent = 'Tipo: ' + recetaNoVegetariana.tipoComida
        contendor.append(nombre, ingredientes, tiempo, dificultad, tipo)
        document.getElementById('contenido').append(contendor)
    })
}