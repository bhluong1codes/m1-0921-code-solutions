console.log('Lodash is loaded:', typeof _ !== 'undefined');

function createDeck() {
  var arr = [];
  var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  var suits = ['Spade', 'Clubs', 'Diamonds', 'Hearts'];

  for (var i = 0; i < cards.length; i++) {
    for (var a = 0; a < suits.length; a++) {
      arr.push({ card: cards[i], suit: suits[a], rank: cards.indexOf(cards[i]) + 1 });
    }
  }

  return arr;
}

var deck = createDeck();

function shuffleDeck(deck) {
  for (var i = 0; i < 52; i++) {

    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }

}

shuffleDeck(deck);

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

for (var i = 0; i < players.length; i++) {
  players[i].hand[0] = deck.shift();
  players[i].hand[1] = deck.shift();
  players[i].score = players[i].hand[0].rank + players[i].hand[1].rank;
}

var scores = [];

for (var a = 0; a < players.length; a++) {
  scores.push(players[a].score);
}

var highest = 0;
for (var b = 0; b < scores.length; b++) {

  if (scores[b] > highest) {
    highest = scores[b];
  }
}

for (b = 0; b < scores.length; b++) {
  if (scores[b] === highest) {
    console.log('Winner: ', players[b].name);
  }

}
