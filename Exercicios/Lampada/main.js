'use strict'

const ligado = document.getElementById('liga');
const desliga = document.getElementById('desliga');
const lampada = document.getElementById('lampada');

function lampadaQuebrada(){
    return lampada.src.indexof (`lampadaQuebrada`) > -1;
}

function lampadaligada(){
    if(!lampadaQuebrada){
        lampada.src='img/ligada.jpg';
    }
}

function lampadaDesligada(){
    if(!lampadaQuebrada){
        lampada.src = 'img/desligada.jpg';
    }
}

function lampadaQuebrada() {
    lampada.src='img/quebrada.jpg';
}

liga.addEventListener(`click`,lampadaligada);
desliga.addEventListener(`click`, lampadaDesligada);
lampada.addEventListener(`mouseleave`,lampadaDesligada);
lampada.addEventListener(`mouseover`,lampadaligada);
lampada.addEventListener(`dblclick`, lampadaQuebrada)