


const form = document.querySelector('form');
form.addEventListener('submit', addItem);



function addItem(event) {
 event.preventDefault();

 const container = document.querySelector('#item-container');
 const h3 = document.createElement('h3');
 container.append(h3);


 const itemInput = document.querySelector('#item');


 h3.innerText = itemInput.value;

 form.reset();
 

 h3.addEventListener('click', function () {
 h3.remove();
 })
}

 

const choices = document.querySelectorAll('.choice');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const resultElem = document.querySelector('#result');
const playAgainBtn = document.querySelector('#play-again');
const countdownElem = document.querySelector('#countdown');
const computerChoiceElem = document.querySelector('#computer-choice');
const playerChoiceElem = document.querySelector("#player-choice");
const weapons = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

moves=0;


const movesLeft = document.querySelector('.movesleft');


 
// Function to generate random weapon for computer
function computerPlay() {
 const weaponIndex = Math.floor(Math.random() * weapons.length);
 return weapons[weaponIndex];

}

// Function to update score and display result
function updateScore(playerWeapon, computerWeapon) {
 

 moves++;
 movesLeft.innerText = `Moves Left: ${5-moves}`;
 
 if (playerWeapon) {
 computerChoiceElem.innerHTML = `Computer choose: ${computerWeapon}.`;
 playerChoiceElem.innerHTML = `Player choose: ${playerWeapon}.`;
 if (playerWeapon === computerWeapon) {
 resultElem.innerHTML = "It's a tie!";
 } else if (
 (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
 (playerWeapon === 'paper' && computerWeapon === 'rock') ||
 (playerWeapon === 'scissors' && computerWeapon === 'paper')
 ) {
 resultElem.innerHTML = 'You win!';
 playerScore++;
 playerScoreElem.innerHTML = `You: ${playerScore}`;
 
 
 } else {
 resultElem.innerHTML = 'Computer wins!';
 computerScore++;
 computerScoreElem.innerHTML = `Computer: ${computerScore}`;
 }
 
 }

 if (playerScore === 3) {
 resultElem.textContent = 'You win the game!';
 resultElem.style.color = 'green';
 computerChoiceElem.innerHTML = 'Game Over';

   playerChoiceElem.innerHTML = '';
 disableOptions();
 
 }

 if (computerScore === 3) {
 resultElem.textContent = 'You lose the game!';
 resultElem.style.color = 'red';
 computerChoiceElem.innerHTML = 'Game Over';

   playerChoiceElem.innerHTML = '';
 disableOptions();
 
 }

 else
 if(moves == 5 ){
 disableOptions();
 // compare the scores and show the final result
 if (playerScore > computerScore) {
   resultElem.textContent = "You win!";
   resultElem.style.color = "green";
   computerChoiceElem.innerHTML = '';
   playerChoiceElem.innerHTML = '';
 
 } else if (playerScore < computerScore) {
   resultElem.textContent = "You lose!";
   resultElem.style.color = "red";
   computerChoiceElem.innerHTML = '';
   playerChoiceElem.innerHTML = '';
 } else {
   resultElem.textContent = "It's a tie!";
   resultElem.style.color = "blue";
   computerChoiceElem.innerHTML = '';
   playerChoiceElem.innerHTML = '';
 }
}
}

 
 


// Function to handle player choice
function selectWeapon() {

 let playerWeapon = this.id;
 playerChoiceElem.innerHTML = 'playerWeapon';
 const computerWeapon = computerPlay();
 computerChoiceElem.innerHTML = 'computerWeapon';
 updateScore(playerWeapon, computerWeapon);

 
}


// Function to reset the game
function resetGame() {

 
 playerScore = 0;
 computerScore = 0;
 moves = 0;
 // reset the score to zero
 score = 0; // reset the score to zero

 playerScoreElem.innerHTML = 'you: 0';
 computerScoreElem.innerHTML = 'Computer: 0';
 resultElem.innerHTML = 'Choose your weapon!';
 movesLeft.innerText = 'Moves Left: 5';
 resultElem.style.color = '#660033';
 computerChoiceElem.innerHTML = '';
 playerChoiceElem.innerHTML = '';
 
 
 
 enableOptions();
 
}

function disableOptions() {
 choices.forEach((choice) => {
 choice.style.pointerEvents = 'none';
 });
 
 
}

function enableOptions() {
 choices.forEach((choice) => {
 choice.style.pointerEvents = 'auto';
 });


}




// Event listeners
choices.forEach((choice) => choice.addEventListener('click', selectWeapon));


playAgainBtn.addEventListener('click', resetGame);

