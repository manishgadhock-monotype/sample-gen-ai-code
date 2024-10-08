class TicTacToe {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
  }

  startGame() {
    this.printBoard();
    this.makeMove(0, 0); // Example move
    // Add more interaction logic here
  }

  printBoard() {
    console.log(this.board.map(row => row.join(' | ')).join('\n---------\n'));
  }

  makeMove(row, col) {
    if (this.board[row][col] === '') {
      this.board[row][col] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.printBoard();
    } else {
      console.log('Cell already taken. Try a different move.');
    }
  }
}

module.exports = TicTacToe;
