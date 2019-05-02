let cards = [ //These are our cards.
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
]

let cardsInPlay = []; //Stores which cards the user has tried.

function checkForMatch() { //Checks if first card and second card are a match.
    if (cardsInPlay[0] === cardsInPlay[1]) { //If both cards match.
        alert("You found a match!");
    } else { //Else they do not match.
        alert("Sorry, try again.");

    }
    cardsInPlay = []; //Resets the cards in play array.
}

function flipCard() { //When user flips a card.
    let cardId = this.getAttribute('data-id'); //Gets the data-id of the card that was just clicked.

    console.log(`User flipped ${cards[cardId].rank} of ${cards[cardId].suit}.`); //Logs rank and suit value of current card picked.
    console.log(`User flipped ${cards[cardId].cardImage}.`); //Logs image location of current card picked.

    cardsInPlay.push(cards[cardId].rank); //Pushes current card picked onto cardsInPlay array. ie: King or Queen.
    
    this.setAttribute('src', cards[cardId].cardImage); //Sets the current card to the front value.

    if (cardsInPlay.length === 2) { //Checks if user has picked two cards.
        checkForMatch(); //Calls function to check if both cards match.
    }
}

function resetGame() { //When user clicks reset, returns all the cards to default state.
    cardsInPlay = []; //Resets the cards in play array.

    for (let i = 0; i < cards.length; i++) { //Loops through the cards array.
        let cardElement = document.querySelector(`[data-id='${i}']`); //Stores the card for the current iteration.
        cardElement.setAttribute('src', 'images/back.png'); //Restores default back of card.
    }
}

function createBoard() { //When the app loads, creates cards for the board.
    for (let i = 0; i < cards.length; i++) { //Loops through the cards array.
        let cardElement = document.createElement('img'); //Creates a new image element.
        cardElement.setAttribute('src', 'images/back.png'); //Initially shows back of card.
        cardElement.setAttribute('data-id', i); //Gives data-id based on current iteration.
        cardElement.addEventListener('click', flipCard); //Adds event listener that triggers flipCard when clicked.
        document.getElementById('game-board').appendChild(cardElement); //Adds new image to the board.
    }
}

function createResetButton() { //When the app loads, adds functionality to the reset button.
    let resetElement = document.getElementById('reset-button'); //Stores the reset-button button.
    resetElement.setAttribute('data-id', 4); //Gives data-id of 4.      (Is this necessary?)
    resetElement.addEventListener('click', resetGame); //Adds event listener that triggers resetGame when clicked.
}

createBoard(); //Creates cards for the board.
createResetButton(); //Adds functionality to the reset button.