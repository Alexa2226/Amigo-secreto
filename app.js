// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.ariaValueMax.trim();

    if(nombre === ""){
        alert("Por favor, inserte un nombre");
        return;
    }

    amigos.push(nombre);

    actualizarlista();
    input.value = "";

    console.log(amigos);
}
