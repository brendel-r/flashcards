const data = require('./data');
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

const prototypeQuestions = data.prototypeData;

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    let cards = prototypeQuestions.map((card) =>
    new Card(card.id, card.question, card.answers, card.correctAnswer));
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;