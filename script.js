//variables
const paloUp = document.querySelector('#paloUp')
const paloDown = document.querySelector('#paloDown')
const card = document.querySelector('#num')
const newCard = document.querySelector('#newCard')

let palos = ['♦', '♥', '♠', '♣']
let numeros = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q']

//funciones
function getNumber() {
    let random = Math.floor(Math.random() * numeros.length)
    return numeros[random]
}

function getPalo() {
    let random = Math.floor(Math.random() * palos.length)
    return palos[random]
}

function getCard() {
    let num = getNumber()
    let palo = getPalo()

    paloUp.innerText = palo
    card.innerText = num
    paloDown.innerText = palo

    if (palo == '♥' || palo == '♦') {
        paloUp.style.color = 'red'
        card.style.color = 'red'
        paloDown.style.color = 'red'
    }

    else {
        paloUp.style.color = 'black'
        card.style.color = 'black'
        paloDown.style.color = 'black'
    }

}


window.onload = getCard;

newCard.addEventListener('click', getCard)