// Ejercicio 21
// Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
// elección.
window.onload = function () {
    document.getElementById("btn").onclick = hacerClick;
}
function hacerClick() {
    console.log("Llegaste al click !!! ");
};


let sombreado = document.getElementById('sombreado');
console.log(sombreado);
let palabrassombreadas = sombreado.innerHTML.replace(/\b\w{8,}\b/g, '<span style="background-color: yellow;">$&</span>');
sombreado.innerHTML = palabrassombreadas;


