let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(userMove){
let result = '';
const computerMove = pickCPUMove();
if(userMove === 'Scissors'){
  if(computerMove === 'Scissors'){
    result = 'Tie.';
  }else if(computerMove === 'Rock'){
    result = 'You Lose.';
  }else if(computerMove === 'Paper'){
    result = 'You Win.';
  }
}else if(userMove === 'Paper'){
  if(computerMove === 'Paper'){
    result = 'Tie.';
  }else if(computerMove === 'Scissors'){
    result = 'You Lose.';
  }else if(computerMove === 'Rock'){
    result = 'You Win.';
  }
}else if(userMove === 'Rock'){
  if(computerMove === 'Rock'){
    result = 'Tie.';
  }else if(computerMove === 'Paper'){
    result = 'You Lose.';
  }else if(computerMove === 'Scissors'){
    result = 'You Win.';
  }
}

if(result === 'You Win.'){
  score.wins += 1;
}else if(result === 'You Lose.'){
  score.losses += 1;
}else if(result === 'Tie.'){
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You <img src = "images/${userMove}-emoji.png" class = "move-icon"> <img src = "images/${computerMove}-emoji.png" class = "move-icon"> Computer`;
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickCPUMove(){
let computerMove = '';
const randomNumber = Math.random();
if((randomNumber >= 0) && (randomNumber < 1/3)){
  computerMove = 'Rock';
}else if((randomNumber >= 1/3) && (randomNumber < 2/3)){
  computerMove = 'Paper';
}else{
  computerMove = 'Scissors';
}

return computerMove;
}