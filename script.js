// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Array de cartas com o URL das imagens
const cards = [
	'https://picsum.photos/id/1/200/300',
	'https://picsum.photos/id/2/200/300',
	'https://picsum.photos/id/3/200/300',
	'https://picsum.photos/id/4/200/300',
	'https://picsum.photos/id/5/200/300',
	'https://picsum.photos/id/6/200/300',
	'https://picsum.photos/id/7/200/300',
	'https://picsum.photos/id/8/200/300',
	'https://picsum.photos/id/1/200/300',
	'https://picsum.photos/id/2/200/300',
	'https://picsum.photos/id/3/200/300',
	'https://picsum.photos/id/4/200/300',
	'https://picsum.photos/id/5/200/300',
	'https://picsum.photos/id/6/200/300',
	'https://picsum.photos/id/7/200/300',
	'https://picsum.photos/id/8/200/300',
];

// Variáveis para armazenar a carta anteriormente virada e o número de jogadas
let flippedCard = null;
let moveCounter = 0;

// Função para criar as cartas no tabuleiro
function createBoard() {
	const shuffledCards = shuffle(cards);
	const board = document.querySelector('.board');
	shuffledCards.forEach(function(card) {
		const div = document.createElement('div');
		div.classList.add('card');
		div.innerHTML = `<img src="${card}" alt="Card">`;
		div.addEventListener('click', flipCard);
		board.appendChild(div);
	});
}

// Função para virar uma carta
function flipCard() {
	// Não faz nada se a carta já estiver virada ou duas cartas estiverem viradas
	if (this === flippedCard || document.querySelectorAll('.card.flipped').length === 2) {
		return;
	}
	
	this.classList.add('flipped');
	
	if (flippedCard === null) {
		// Armazena a carta virada
		flippedCard = this;
	} else {
		// Compara a carta atual com a carta anteriormente virada
		moveCounter++;
		document.getElementById('move-counter').innerText = moveCounter;
		
		if (this.querySelector('img').src === flippedCard.querySelector('img').src) {
			// Cartas iguais - mantém as cartas viradas
			flippedCard = null;
		} else {
			// Cartas diferentes - vira as cartas de volta
			setTimeout(function() {
				this.classList.remove('flipped');
				flippedCard.classList.remove('flipped');
				flippedCard = null;
			}.bind(this), 1000);
		}
	}
	
	// Verifica se todas as cartas foram encontradas
function checkWin() {
if (document.querySelectorAll('.card.flipped').length === cards.length) {
alert(`Parabéns! Você completou o jogo em ${moveCounter} jogadas.`);
}
}
checkWin();
}

// Chama a função para criar o tabuleiro quando a página é carregada
document.addEventListener('DOMContentLoaded', createBoard);
