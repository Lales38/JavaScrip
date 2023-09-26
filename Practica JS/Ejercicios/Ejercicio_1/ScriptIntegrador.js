const ul = document.getElementById("lista");
const buton = document.getElementById("btn");

async function getAllCharacters() {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let { result } = await response.json();
    return result;
}


function agregar (nombre){
let li = document.createElement("li");
li.innerHTML = nombre;
ul.append(li);

}
buton.onclick = async function(){


let result = await getAllCharacters();

result.forEach(e=> {
    agregar(e.name);
});

}