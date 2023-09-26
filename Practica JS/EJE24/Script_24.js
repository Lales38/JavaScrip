
function calcularArea() {
    let rad = document.getElementById("radio").value;
    document.getElementById("demo").innerHTML = `El radio ingresado es : ${rad}!!!`;
    document.getElementById("rta").innerHTML = `El área es: ${(Math.PI * (rad)) ** 2}`;
}

function calcularPerimetro() {
    let rad = document.getElementById("radio").value;
    document.getElementById("rta1").textContent = ` El périmetro es: ${Math.PI * (rad * 2)}`;
}