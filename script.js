// Efecto de máquina de escribir para la fecha
const datetxt = "De todos los que te queremos";
const charArrDate = datetxt.split('');
const date__of__birth = document.querySelector(".date__of__birth span");
let currentIndex = 0;

setTimeout(() => {
    let timeDatetxt = setInterval(() => {
        if (currentIndex < charArrDate.length) {
            date__of__birth.textContent += charArrDate[currentIndex];
            currentIndex++;
        } else {
            let starLeft = document.createElement("i");
            starLeft.className = "fa-solid fa-star";
            let starRight = document.createElement("i");
            starRight.className = "fa-solid fa-star";
            
            document.querySelector(".date__of__birth").prepend(starLeft);
            document.querySelector(".date__of__birth").appendChild(starRight);
            
            clearInterval(timeDatetxt);
        }
    }, 100);
}, 10000); // Espera a que termine la animación css inicial

// --- Lógica del Sistema de Cartas ---
const btnLetter = document.getElementById('btn__letter');
const cardsOverlay = document.getElementById('cardsOverlay');
const closeCardsOverlay = document.getElementById('closeCardsOverlay');

const cards = document.querySelectorAll('.card');
const cardDetailModal = document.getElementById('cardDetailModal');
const modalText = document.getElementById('modal-text');
const closeCardDetail = document.getElementById('closeCardDetail');
const backToCards = document.getElementById('backToCards');

// 1. Abrir menú de las 7 cartas (Botón principal)
btnLetter.addEventListener('click', () => {
    cardsOverlay.classList.add('active');
});

// 2. Cerrar menú de las 7 cartas (Cruz arriba a la derecha)
closeCardsOverlay.addEventListener('click', () => {
    cardsOverlay.classList.remove('active');
});

// 3. Abrir carta individual (Click en cualquiera de las 7)
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Toma el texto del atributo data-text de cada carta
        const text = card.getAttribute('data-text');
        modalText.textContent = text;
        cardsOverlay.classList.remove('active');
        cardDetailModal.classList.add('active');
    });
});

// 4. Cerrar carta individual (Cruz de la carta)
closeCardDetail.addEventListener('click', () => {
    cardDetailModal.classList.remove('active');
});

backToCards.addEventListener('click', () => {
    cardDetailModal.classList.remove('active');
    cardsOverlay.classList.add('active');
});

// 5. Cerrar carta individual si se hace clic fuera (en lo oscuro)
cardDetailModal.addEventListener('click', (evento) => {
    if (evento.target === cardDetailModal) {
        cardDetailModal.classList.remove('active');
    }
});

document.addEventListener('keydown', (evento) => {
    if (evento.key !== 'Escape') return;

    cardsOverlay.classList.remove('active');
    cardDetailModal.classList.remove('active');
});