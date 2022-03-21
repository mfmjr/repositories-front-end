'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1; // trunc = decimal part on number ; random = random number
let score = 20;
let highScore = 0;

// Function to display a message
const displayMessage = function(message) 
{
    document.querySelector('.message').textContent = message;
}

// Function to display a number
const displayNumber = function(message) 
{
    document.querySelector('.number').textContent = message;
}

// Function to display a score
const displayScore = function(message) 
{
    document.querySelector('.score').textContent = message;
}

// Function to display a Highscore
const displayHighscore = function(message) 
{
    document.querySelector('.highscore').textContent = message;
}

// Function the bottom
const pushButton = function()
{
    const guess = Number(document.querySelector('.guess').value); // Box this save value
    console.log(guess, typeof guess); 
 
    // When there is no input
    if(!guess)
    {
        displayMessage('No insert number ❌');
    }
    else
    {
        // When players wins
        if(guess === secretNumber) 
        {
            displayMessage('Correct number! ✔');
            document.querySelector('body').style.backgroundColor = "limegreen";
            document.querySelector('.number').style.width = "300px";
            displayNumber(secretNumber); // Number is box central     

            // Update for numbers this score
            if(score > highScore)
            { 
                highScore = score;
                displayHighscore(highScore);
            }
        }
        
        // No number insert
        if(guess !== secretNumber)
        {
            if (score > 1) 
            {   
                displayMessage(guess > secretNumber ? 'Number insert high' : 'Number insert low');
                score--;
                displayScore(score);            
            }
            else
            {
                displayMessage('Game Over!!! 😥');
                score--;
                displayScore(score);
            }     
        }        
    }
}

const againButton = function ()
{   
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    secretNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '150px';
    document.querySelector('body').style.backgroundColor = '#222';    
}

/* Events listenners. */ 

// Again button
document.querySelector('.again').addEventListener('click', againButton);

// Check button
document.querySelector('.check').addEventListener('click', pushButton); // Activating mouse click event
