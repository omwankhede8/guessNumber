' use strict';
// guessing number which generate a random number between 1 to 20, with math.random which generate number between 0 and 1
let secrectNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// adding event handler of click  with function guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displaymessage('😅Input a number!');
    //when player win
  } else if (guess === secrectNumber) {
    displaymessage('Correct number 🥳');
    // displaying correct number
    document.querySelector('.number').textContent = secrectNumber;
    // changing background color
    document.querySelector('body').style.backgroundColor = '#10b111';
    //changing ? mark in middle width
    document.querySelector('.number').style.width = '30rem';

    // checking highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is high
  } else if (guess > secrectNumber) {
    if (score > 1) {
      displaymessage('To high');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // when guess is low and decresing highscore
  } else if (guess < secrectNumber) {
    //cheking if the score is not 0 & and not decreasing highscore
    if (score > 1) {
      displaymessage('To low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You lost the game🥹 ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//  restoring every value with click with again button
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = score;
  secrectNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
