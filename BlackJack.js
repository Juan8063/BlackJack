let dealerCards = 0;
let playerCards = 0;
function getCards() {
     return Math.floor(Math.random()*12);
}

function startGame() {
    dealerCards = getCards() + getCards();
    playercards = getCards() + getCards();
    console.log("you have a total of " + playerCards)
}

startGame();