//variables
const carta = document.querySelector('#num')
const paloUp = document.querySelector('#paloUp')
const paloDown = document.querySelector('#paloDown')
const newCardButton = document.querySelector('#newCard')

let palos = ['♦', '♥', '♠', '♣']
let numeros = ['2','3','4','5','6','7','8','9','10','J','K','Q']

//funciones

function getPalo (){
    let randomIndex = Math.floor(Math.random()* palos.length)
    return palos[randomIndex]
}
console.log(getPalo())

function getNumber (){
    let randomIndex = Math.floor(Math.random()* numeros.length)
    return numeros[randomIndex]
}
console.log(getNumber())

function getRandomCard(){
let numero = getNumber();
let palo = getPalo();

paloUp.innerText = palo;
carta.innerText = numero;
paloDown.innerText = palo;

if(palo == "♥" || palo == "♦"){
    paloUp.style.color = 'red';
    paloDown.style.color = 'red';
    carta.style.color = 'red';
}

else{
    paloUp.style.color = 'black';
    paloDown.style.color = 'black';
    carta.style.color = 'black';
}

}

//window.onload = getRandomCard;

//eventos

newCardButton.addEventListener('click', getRandomCard);