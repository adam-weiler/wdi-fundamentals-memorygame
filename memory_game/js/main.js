console.log('Up and running!');

let cards = ['queen', 'queen', 'king', 'king']; //These are our cards.

let cardsInPlay = []; //Stores which cards the user has tried.

let cardOne = cards[0]; //User's first pick is first card.
cardsInPlay.push(cardOne); //Pushes first pick onto their array.
console.log(`User flipped ${cardOne}`);

let cardTwo = cards[1]; //User's second pick is third card.
cardsInPlay.push(cardTwo); //Pushes second pick onto their array.
console.log(`User flipped ${cardTwo}`);

if (cardsInPlay.length === 2) { //Checks if user has picked two cards.

    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }

}