'use strict';

// Seleting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0')
const currentScore1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice') // Numbers dice
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll');
const btnHoll = document.querySelector('.btn--hold');
const scores = [0 , 0] // Total score for plays in new game.
const player0El = document.querySelector('.player--0'); // Background modified when player selection
const player1El = document.querySelector('.player--1');
let activePlayer = 0;
let currentScore = 0;
let playing = true;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // Class ocult

// Function to next player
const switchPlayer = function ()
{    
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active'); // toogle enable class for once 
    player1El.classList.toggle('player--active');
}

// Functions press buttons
const pressRoll = function()
{
    if(playing === true)
    {
        // 1. Gererating a random dice roll        
        const numberDice = Math.trunc(Math.random() *6) + 1; // Numbers of dice roll random

        // 2. Display for numbers a dice roll
        diceEl.classList.remove('hidden'); // Ocult class
        diceEl.src = `dice-${numberDice}.png`;

        // 3. Ckeck for ralled 1: if true, switch to next player
        if (numberDice !== 1 ) 
        {
            // Add dice to current score
            currentScore += numberDice; // currentScore = currentScore + nubmerDice        
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;  
        }
        else 
        {
            // Switch to next player
            switchPlayer();
        }
    }
}

// Function for press button Holl
const pushHoll = function()
{
    if (playing == true) 
    {
        // 1. Sum of scores
        scores[activePlayer] += currentScore; // scores[1] = scores[1] + currentScore        
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if players scores is >= 100
        if(scores[activePlayer] >= 10) 
        {   
            // Finish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else
        {   
            switchPlayer();
        }   
    }
}

// Function for press button New Game
const pushNew = function()
{                   
    playing = false;    
    scores[activePlayer] = 0;
    currentScore = 0;     
    document.querySelector('.current-score').textContent = currentScore;
    document.getElementById('score--0').textContent = scores[activePlayer];
    document.getElementById('score--1').textContent = scores[activePlayer];
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    if(!playing)
    {
        playing = true;
        pushHoll();
        pressRoll();
    }
}

// Events listeners
// Event when press Roll
btnRoll.addEventListener('click', pressRoll);

// Event when press Holl
btnHoll.addEventListener('click', pushHoll);

//Event when press New Game
btnNew.addEventListener('click', pushNew);