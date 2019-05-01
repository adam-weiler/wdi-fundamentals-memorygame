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
        console.log("You found a match!");
    } else { //Else they do not match.
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) { //When user flips a card.
    console.log(`User flipped ${cards[cardId].rank} of ${cards[cardId].suit}.`); //Logs rank and suit value of current card picked.
    console.log(`User flipped ${cards[cardId].cardImage}.`); //Logs image location of current card picked.

    cardsInPlay.push(cards[cardId].rank); //Pushes current card picked onto cardsInPlay array. ie: King or Queen.
    
    if (cardsInPlay.length === 2) { //Checks if user has picked two cards.
        checkForMatch(); //Calls function to check if both cards match.
    }
}

flipCard(0); //Simulates user flipping card.
flipCard(2); //Simulates user flipping card.