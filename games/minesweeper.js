class Minesweeper {
  constructor(rows, cols, mines) {
    this.rows = rows;
    this.cols = cols;
    this.mines = mines;
    this.board = this.createBoard();
    this.placeMines();
    this.calculateNumbers();
    this.gameOver = false;
  }

  createBoard() {
    return Array.from({ length: this.rows }, () => Array(this.cols).fill({ revealed: false, mine: false, number: 0 }));
  }

  placeMines() {
    let placedMines = 0;
    while (placedMines < this.mines) {
      const row = Math.floor(Math.random() * this.rows);
      const col = Math.floor(Math.random() * this.cols);
      if (!this.board[row][col].mine) {
        this.board[row][col].mine = true;
        placedMines++;
      }
    }
  }

  calculateNumbers() {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.board[row][col].mine) continue;
        let count = 0;
        for (const [dx, dy] of directions) {
          const newRow = row + dx;
          const newCol = col + dy;
          if (newRow >= 0 && newRow < this.rows && newCol >= 0 && newCol < this.cols && this.board[newRow][newCol].mine) {
            count++;
          }
        }
        this.board[row][col].number = count;
      }
    }
  }

  printBoard() {
    console.log(this.board.map(row => row.map(cell => cell.revealed ? (cell.mine ? 'M' : cell.number) : 'X').join(' ')).join('\n'));
  }
}

module.exports = Minesweeper;
