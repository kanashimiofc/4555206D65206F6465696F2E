const player = document.querySelector('.player');
const enemy = document.querySelector('.enemy');
const scoreElement = document.querySelector('.score');
let score = 0;

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function moveEnemy() {
    let target = getRandom(0, 90);
    let time = getRandom(2000, 5000);

    enemy.style.bottom = target + '%';

    setTimeout(moveEnemy, time);
}

function checkCollision() {
    let playerRect = player.getBoundingClientRect();
    let enemyRect = enemy.getBoundingClientRect();

    if (playerRect.bottom < enemyRect.top || playerRect.top > enemyRect.bottom || playerRect.right < enemyRect.left || playerRect.left > enemyRect.right) {
        return false;
    } else {
        return true;
    }
}

function startGame() {
    moveEnemy();

    setInterval(() => {
        if (checkCollision()) {
            alert('Você perdeu!');
            location.reload();
        }

        score++;
        scoreElement.textContent = score;
    }, 1000 / 60);
}

startGame();

document.addEventListener('touchstart', (event) => {
    event.preventDefault();
    let touchY = event.touches[0].clientY;

    document.addEventListener('touchmove', (event) => {
event.preventDefault();
let deltaY = touchY - event.touches[0].clientY;
    player.style.bottom = parseFloat(player.style.bottom) + deltaY / window.innerHeight * 100 + '%';

    touchY = event.touches[0].clientY;
});

