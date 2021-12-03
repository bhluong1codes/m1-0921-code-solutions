console.log('Lodash is loaded:', typeof _ !== 'undefined');

function createDeck() {
  var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  var suits = ['Spade', 'Clubs', 'Diamonds', 'Hearts'];
  var deck = [];
  for (var i = 0; i < cards.length; i++) {
    for (var a = 0; a < suits.length; a++) {
      deck.push({ card: cards[i], suit: suits[a], rank: cards.indexOf(cards[i]) + 1 });
    }
  }
  return deck;
}

createDeck();

function shuffleDeck(deck) {
  for (var i = 0; i < 52; i++) {

    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;

  }
}

console.log(createDeck());
var shuffledDeck = createDeck();
shuffleDeck(shuffledDeck);
console.log(shuffledDeck);

var players = [
  {
    name: 'Daniel Negreanu',
    hand: ['card1', 'card2']
  },
  {
    name: 'Phil Ivey',
    hand: ['card1', 'card2']
  },
  {
    name: 'Gus Hansen',
    hand: ['card1', 'card2']
  },
  {
    name: 'Scotty Nguyen',
    hand: ['card1', 'card2']
  }
];

function dealHand() {
  for (var i = 0; i < players.length; i++) {
    players[i].hand[0] = shuffledDeck[0];
    players[i].hand[1] = shuffledDeck[1];
  }
  return players;
}

dealHand();
console.log(players);
console.log(dealHand());
