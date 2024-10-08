const readline = require('readline');
const TicTacToe = require('./Games/ticTacToe');
const Minesweeper = require('./Games/minesweeper');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askUserChoice() {
  rl.question('Which game would you like to play? (1: Tic Tac Toe, 2: Minesweeper): ', (choice) => {
    if (choice === '1') {
      console.log('Starting Tic Tac Toe...');
      const ticTacToe = new TicTacToe();
      ticTacToe.startGame();
      ticTacToeInteraction(ticTacToe);
    } else if (choice === '2') {
      console.log('Starting Minesweeper...');
      const minesweeper = new Minesweeper(5, 5, 5); // Example parameters
      minesweeper.printBoard();
      minesweeperInteraction(minesweeper);
    } else {
      console.log('Invalid choice. Please enter 1 or 2.');
      askUserChoice();
    }
  });
}

function ticTacToeInteraction(game) {
  rl.question('Enter your move (row,col): ', (move) => {
    const [row, col] = move.split(',').map(Number);
    game.makeMove(row, col);
    if (!game.gameOver) {
      ticTacToeInteraction(game);
    } else {
      rl.close();
    }
  });
}

function minesweeperInteraction(game) {
  rl.question('Enter your move (row,col): ', (move) => {
    const [row, col] = move.split(',').map(Number);
    game.revealCell(row, col);
    if (!game.gameOver) {
      minesweeperInteraction(game);
    } else {
      rl.close();
    }
  });
}

askUserChoice();
