
var edad = prompt("Que edad tenes??", 37);
alert("Hola, tu edad es " + edad);
var numero = 123;

numero = "123";
//console.log("Hola estoy en la consola desde Script te parece");
alert("El tipo de deto es  " + typeof numero);

var flag = true;

alert("El tipo de dato de flag es " + typeof flag);

//Template String
var anios = prompt("Cuantos años tenes ?");

var mensaje = 
`La edad ingresada es
. . . .
. . . . ${anios}`;
alert(mensaje)
