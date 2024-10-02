/* Selectores 
getElement
    getElementById -> Selecciona elemento por un id
    getElementsByClassName -> Selecciona elementos por clase
    getElementsByTagName -> Selecciona elemento por nombre de etiqueta
    
querySelector
    querySelector -> Permite seleccionar por id, por clase y por etiqueta
    querySelectorAll -> Permite seleccionar por id, por clase y por etiqueta
*/

console.log(document.getElementById("usuario")) /* Solo muestra un elemento */
console.log(document.getElementsByClassName("form")) /* Siempre muestra un arreglo */
console.log(document.getElementsByTagName("form")) /* Siempre muestra un arreglo */

console.log(document.querySelector("form"))
console.log(document.querySelectorAll("form"))