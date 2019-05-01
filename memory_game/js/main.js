let cards = ['queen', 'queen', 'king', 'king']; //These are our cards.
let cardsInPlay = []; //Stores which cards the user has tried.

function checkForMatch() { //Checks if first card and second card are a match.
    if (cardsInPlay[0] === cardsInPlay[1]) { //If both cards match.
        console.log("You found a match!");
    } else { //Else they do not match.
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) { //When user flips a card.
    console.log(`User flipped ${cards[cardId]}.`); //Logs face value of current card picked.
    cardsInPlay.push(cards[cardId]); //Pushes current card picked onto cardsInPlay array.
    
    if (cardsInPlay.length === 2) { //Checks if user has picked two cards.
        checkForMatch();
    }
}

flipCard(0); //Simulates user flipping card.
flipCard(2); //Simulates user flipping card.