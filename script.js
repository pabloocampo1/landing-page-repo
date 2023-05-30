
//navbar de responsive mobile
function abrir(){
    document.getElementById("ventana").style.display="block" 
}
function cerrar(){
    document.getElementById("ventana").style.display="none"
}

//slader of section recomendate

const prevCard = document.querySelector('.prevCard')
const nextCard = document.querySelector('.nextCard')
const cardscontainer = document.querySelector('.cardscontainer')

prevCard.addEventListener('click', () => {
    cardscontainer.scrollLeft -= 230
})
nextCard.addEventListener('click', () => {
    cardscontainer.scrollLeft += 230
})
