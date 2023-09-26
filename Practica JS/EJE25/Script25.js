
// function getFormValores() {
//     event.preventDefault();
//     let nombre = document.getElementsByName("nombre")[0].value;
//     let apellido = document.getElementsByName("apellido").value;
//     // [0] es porque getElementsByName() devuelve una lista de elementos con el nombre especificado. 
//     // Si solo hay un elemento con ese nombre, como en este caso, entonces ese elemento es el primer elemento de la lista.
//     // Por lo tanto, para obtener el valor del elemento correcto, debe especificar el índice [0]
//     // Si hubiera más de un elemento con el mismo nombre, entonces debería usar un bucle para recorrer la lista y obtener los valores de cada elemento.
//     // !!! ES BUENA PRACTICA TRABAJAR CON ID QUE CON NOMBRE !!! -> TRABAJAN SIN INDICE

//     document.getElementById("texto").innerHTML = "Nombre: " + nombre + "<br>Apellido: " + apellido;
//     confirm("Seguro que su nombre es: " + nombre + " , " + apellido + " ?");

// }

// function guardarValores(){
   
//     console.log("Entraste");
// let Nombre= document.getElementById("nombre").value;
// let Apellido= document.getElementById("apellido").value;
// console.log(Nombre );
// console.log(Apellido);
// }

// function mostrar(){
//     document.getElementById("rta").textContent = Nombre + Apellido;
// }
// function getFormValores() {
//     event.preventDefault();
//     const nombre = document.getElementById("form1").nombre.value;
//     const apellido = document.getElementById("form1").apellido.value;

//     console.log("Nombre:", nombre);
//     console.log("Apellido:", apellido);
// }

function getFormValores(){
    event.preventDefault();
    const nombre = document.getElementById("form1").nombre.value;
    const apellido = document.getElementById("form1").apellido.value;

    //let nombre = document.getElementById("nombre").values;
    //let apellido = document.getElementById("apellido").values;

    console.log(nombre);
    console.log(apellido);
}
