'use strict';
///////////////////////

///////////////////////////////////////////
// 'El' = Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//Select Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//
let currentEl0 = document.querySelector('#current--0');
let currentEl1 = document.querySelector('#current--1');
//
const diceEl = document.querySelector('.dice');
//
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
//
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
//
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
////////////////////////////
let switchPlayer = function () {
  currentScore = 0;
  // currentEl0.textContent = currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  diceEl.classList.add('hidden');
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle if i ture = remove   if not = not remove
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//////////////////////////////
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(dice);
    //show dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //if dice is  not 1
    if (dice !== 1) {
      currentScore = currentScore + dice;
      // currentEl0.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
/////////////////////
btnHold.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.add('hidden');
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 25) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

///////////////
btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  ///winner screen
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');

  ///score
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  ///current
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
});
