const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissor' || userInput === 'paper') {
      return userInput;
    }
    else {
      console.log('ERROR: Invalid input');
    }
  }
  
  function getComputerChoice() {
    var mathChoice = Math.floor(Math.random() * 3);
    if (mathChoice === 0) {
      return 'rock';
    }
    else if (mathChoice === 1) {
      return 'paper';
    }
    else {
      return 'scissor';
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Game was a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lose';
      }
      else {
        return 'You chose rock, they chose scissor. You win!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissor') {
        return 'You lose';
      }
      else {
        return 'You chose paper, they chose rock. You win!';
      }
    }
    if (userChoice === 'scissor') {
      if (computerChoice === 'rock') {
        return 'You lose';
      }
      else {
        return 'You chose scissor, they chose paper. You win!';
      }
    }
  }
  
  function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
    console.log('User Choice: ' + userChoice);
    console.log('Computer Choice: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();