/*      DECLARACION DE VARIABLES      */
let btn = document.querySelector("#btnJugar");
let btn_soborno = document.querySelector("#btnSoborno");
let mensaje = document.querySelector("#mensaje");
let name1 = document.querySelector("#name1");
let name2 = document.querySelector("#name2");
let ename1 = document.querySelector("#name_1");
let ename2 = document.querySelector("#name_2");
btn.addEventListener("click", dados);
btn_soborno.addEventListener("click", soborno);

function dados() {
    let player1, player2;
    player1 = random(1,6);
    player2 = random(1,6);
    names(name1,  name2);
    let div_1 = document.querySelector("#player-1");
    let div_2 = document.querySelector("#player-2");
    limpiarClases(div_1);
    limpiarClases(div_2);
    imgDados(div_1, player1);
    imgDados(div_2, player2);
    if (player1 > player2){
        mensaje.innerHTML = "🎉 ¡GANA " + ename1.innerHTML.toUpperCase() + "! 🎉";
    } else if (player1 < player2){
        mensaje.innerHTML = "🎉 ¡GANA " + ename2.innerHTML.toUpperCase() + "! 🎉";
    } else if (player2 = player1){
        mensaje.innerHTML = "😣 ¡EMPATE! 😣";
    }
}

function names(namea, nameb) {
    if (namea.value != ""){
        ename1.innerHTML = namea.value;
        namea.value = "";
    }
    if (nameb.value != ""){
        ename2.innerHTML = nameb.value;
        nameb.value = "";
    }
}

function random(a, b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
}
function limpiarClases(html) {
    html.className = "";
}

function imgDados(html, data) {
    switch (data) {
        case 1:
            html.classList.add("dado1")
            break;
        case 2:
            html.classList.add("dado2")
            break;
        case 3:
            html.classList.add("dado3")
            break;
        case 4:
            html.classList.add("dado4")
            break;
        case 5:
            html.classList.add("dado5")
            break;
        case 6:
            html.classList.add("dado6")
            break;
    }
}

function soborno() {
    mensaje.innerHTML = "😒 ¡ME DAS LÁSTIMA! 😒";
}