function Ejer1() {
    var tiempo = prompt("Como esta el dia? ");
    alert("el dia esta " + tiempo);
}
function Eje2() {

    let radio = prompt("Ingrese el radio deseado: ");
    alert(`El area correspondiente al radio ingresado es : ${(radio ** 2) * Math.PI}`);
    alert(`El perimetro correspondiente al radio ingresado es : ${(2 * radio) * Math.PI}`);
}

function Eje3() {
    var age = prompt("Ingrese su edad: ");
    if (age < 18) {
        alert("Usted es menor de edad!!!!")
    } else {
        alert("Usted puede pasar ya que es mayor de edad")
    }

}

function Eje4() {
    do {
        var letra = prompt("Ingrese un letra (N/S) : ");
        if (letra == "S" || letra == "N") {
            alert("Correcto !!!!")
        } else {
            alert("In co rrec to ")
        }
    } while (!(letra == "S" || letra == "N"));
}
function Eje5() {

    var n1 = prompt("Ingrese el primer número: ");
    var n2 = prompt("Ingrese el segundo numero: ");
    alert("Ingrese que operación desea realizar.");
    var op = prompt(" 'R' Restar.\n 'S' Sumar. \n 'D' Dividir. \n 'M' Multiplicar. ");
    switch (op) {
        case "R":
        case "r":
            alert(`El resultado de la resta es${n1 - n2}`);
            break;
        case "S":
        case "s":
            alert(`El resultado de la suma es${n1 + n2}`);
            break;
        case "d":
        case "D":
            alert(`El resultado de la división es${n1 / n2}`);
            break;
        case "M":
        case "m":
            alert(`El resultado de la multiplicación es${n1 * n2}`);
            break;
        default:
            alert("El dato ingresado no realiza alguna operación.");
            break;
    }
}

function Eje6() {
    var numero = prompt("Ingrese un número entero: ")
    if (numero == 0) {
        alert("El número ingresado, no es par ni impar !!!");
    } else {
        if ((numero % 2 == 0)) {
            alert("El número ingresado es par");
        } else {
            alert("El número ingresado es impar");
        }
    }
}

function Eje7() {
    var limite = parseInt(prompt("Ingrese un valor máximo positivo: "));
    var suma = 0;
    do {
        var num = parseInt(prompt("Ingrese un numero positivo: "));
        suma += num;

    } while (suma < limite);
    alert("Superaste el valor máximo: " + limite + " la suma ingresada es : " + suma);
}

function Eje8() {

    var conjunto = new Array();
    var num = null;
    var promedio = 0;
    do {
        num = parseInt(prompt("ingrese un número mayor a cero para ingresar ó  0 para salir"));
        if (num != 0) {
            conjunto.push(num);
            promedio += num;
        }

    } while (!(num == 0));
    alert(`El mayor número ingresado es: ${Math.max.apply(null, conjunto)}`);
    alert(`El menor número ingresado es: ${Math.min.apply(null, conjunto)}`);
    alert(`el promedio de los números ingresados es: ${promedio / conjunto.length}`);
}

function Eje9() {
    var frase = prompt(" Ingrese una palabra o frase: ");
    console.log(frase);
    frase = frase.toUpperCase();
    console.log(frase);
    var fraseEstirada = "";
    for (let index = 0; index < frase.length; index++) {
        let letraEstirada = frase.substring(index, (index + 1));
        // console.log(`${letraEstirada}  `);
        fraseEstirada = fraseEstirada.concat(letraEstirada + " ");
    }

    alert(`${fraseEstirada}`);
}

function Eje10() {
    var palabra = prompt("Ingrese una palabra: ");
    console.log(palabra);
    console.log(palabra.length);
    var invertida = "";
    for (var i = palabra.length - 1; i >= 0; i--) {
        invertida += palabra[i];
    }
    console.log(invertida);
}
let fraseMasLarga = (frase) => {
    frase = frase + ' ';
    let resPal = ''; let palLarga = '';
    for (let i = 0; i < frase.length; i++) {
        letra = frase.substring(i, i + 1);
        if (letra != ' ') {
            resPal = resPal + letra;
        }
        console.log(letra);
        if (letra == ' ') {

            if (resPal.length > palLarga.length) {
                palLarga = resPal;
            }
            resPal = '';
        }
    }
    return palLarga;
}
// function ejer11() {
//     fra = prompt("Ingrese una frase");
//     alert("La palabra más larga: " + fraseMasLarga(fra));
// }
function eje11() {

    let frase = prompt("Ingresa una frase:");
    const palabras = frase.split(' ');
    console.log(frase);
    let palabraLarga = ' ';

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraLarga.length) {
            console.log(palabras[i]);
            palabraLarga = palabras[i];
        }
    }

    alert(palabraLarga);
}
function eje12() {

}
// Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
// 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.}
function Eje13() {
    let persona = {
        nombre: "Alejandro",
        edad: 45,
        sexo: "H",
    }
    alert("Nombre: " + persona.nombre + "\n edad:" + persona.edad + "\n sexo " + persona.sexo);

}
// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.
function CrearLibro() {
    let Libro = {
        isbn: +prompt("ingrse número ISBN"),
        titulo: prompt("ingrse Titulo de la obra"),
        autor: prompt("Ingrese Autor"),
        numPag: +prompt("Ingrese cantidad de paginas del mismo"),
    }
    return Libro;
}
function mostrarLibro(libro) {
    alert("ISBN: " + libro.isbn + "\ntitulo: " + libro.titulo + "\nautor: " + libro.autor + "\nnumPag: " + libro.numPag);
}
function eje14() {
    mostrarLibro(CrearLibro());
}
// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// radio del círculo lo proporcionará el usuario.
function Area(rad) {
    return (Math.PI * (rad ** 2)).toFixed(2);
}
function Perimetro(rad) {
    return (2 * Math.PI * rad).toFixed(2);
}
function crearCirculo(radio) {
    let circulo = {
        area: Area(radio),
        perimetro: Perimetro(radio),
    }
    return circulo;
}
function eje15() {
    var radio = +prompt("Ingrese el radio", 0);
    cir = crearCirculo(radio);
    alert("El area es: " + cir.area);
    alert("El perimetro es: " + cir.perimetro);
}

// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla

function eje16() {
    let arr1 = [];
    let arr2 = [];
    for (let index = 0; index < 5; index++) {
        arr1[index] = Math.floor(Math.random() * 10);
        arr2[index]= Math.floor(Math.random() * 10);
    }
    console.log(arr1);
    console.log(arr2);
    // Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
    // resultado
    arr1.splice(arr1.length -2,2);
    arr2.splice(arr2.length -2,2);
    console.log(arr1);
    console.log(arr2);
}
// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos
function a(valores) {
    var ind = 0;
    var palabra = "";
    for (let i = 0; i < valores.length; i++) {
        if (typeof valores[i] == "string") {
            if (palabra.length < valores[i].length) {
                ind = i;
                palabra = valores[i];
            }
        }
    }
    alert(`La palabra mas larga es: ${valores[ind]}`);
}
function c(valores) {
    console.log("La suma de los números dentro del arreglo es : " + (valores[1] + valores[5]));
    console.log("La resta de los números dentro del arreglo es : " + (valores[1] - valores[5]));
    console.log("La multiplicación de los números dentro del arreglo es : " + (valores[1] * valores[5]));
    console.log("La divición de los números dentro del arreglo es : " + (valores[1] / valores[5]));
    console.log("La potenciacion de los números dentro del arreglo es : " + (valores[1] ** valores[5]));
}
function b(valores) {
    console.log(valores[1] > valores[5]);
    console.log(valores[1] == valores[5]);
}
function Eje18() {
    var valores = [true, 5, false, "hola", "adios", 2];
    a(valores);
    b(valores);
    c(valores);
}
// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
// de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// de 20.
function arrayA() {
    var a = [];
    for (let j = 0; j < 50; j++) {
        a[j] = Math.round(Math.random() * 50 + 1);

    }
    console.log(a);
    a.sort(compareNumeric)
    console.log(a);
    return a;
}
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
function arrayB(a) {
    var b = [];
    for (let j = 0; j < 10; j++) {
        b[j] = a[j];
    }
    for (let k = 10; k < 20; k++) {
        b[k] = 0.5;
    }
    console.log(b);
}
function Eje19() {
    arrayB(arrayA());

}
// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

function llenarArray() {

    var personas = {


        nombre: prompt("Ingrese el nombre: "),
        edad: prompt("Ingrese la edad: "),
        sexo: prompt("Ingrese el sexo('H' hombre, 'M' mujer, 'O' otro): "),
        peso: prompt("ingese el peso:"),
        altura: prompt("ingrese la altura: ")
    }
    return personas;
}
function Eje21() {

    console.log(llenarArray());
}









