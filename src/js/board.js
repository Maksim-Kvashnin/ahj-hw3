export default class GameBoard {
  constructor(size) {
    this.boardSize = size ** 2;
    this.board = document.getElementsByClassName('board').item(0);
    this.fields = undefined;
  }

  draw() {
    let html = '';
    for (let i = 1; i <= this.boardSize; i += 1) {
      html += '<div class="field"></div>';
    }
    this.board.innerHTML = html;
    this.fields = this.board.getElementsByClassName('field');
  }
}
