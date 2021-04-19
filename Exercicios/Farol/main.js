const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const luzdetransito = ( event ) => {
    parar();
    ligar[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const mudarcores = () => {
    const colors = ['vermelho','amarelo','verde']
    const color = colors[ colorIndex ];
    ligar[color]();
    nextIndex();
}

const parar = () => {
    clearInterval ( intervalId );
}

const ligar = {
    'vermelho':      () => img.src = './img/vermelho.png',
    'amarelo':   () => img.src = './img/amarelo.png',
    'verde':    () => img.src = './img/verde.png',
    'auto': () => intervalId = setInterval( mudarcores, 1000 )
}

buttons.addEventListener('click', luzdetransito );