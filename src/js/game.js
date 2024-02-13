export default class GamePlay {
  constructor(board) {
    this.board = board;
    this.missedLimit = 5;
    this.points = 0;
    this.missed = 0;
    this.viewPoint = document.getElementById('points');
    this.viewMissed = document.getElementById('missPoints');
    this.interval = 0;
    this.position = 0;
    this.lastPosition = 0;
    this.board.draw();
    this.gameStarted = false;
    this.click = true;
  }

  init() {
    for (let i = 0; i < this.board.fields.length; i += 1) {
      this.board.fields.item(i).addEventListener('click', (event) => {
        if (!this.gameStarted) return;
        if (event.target.closest('.goblin')) {
          this.points += 1;
          this.viewPoint.textContent = this.points;
        } else {
          this.missed += 1;
          this.viewMissed.textContent = this.missed;
        }
        if (this.missed > this.missedLimit) {
          this.viewMissed.textContent -= 1;
          this.stop();
        }
        this.click = true;
      });
    }
  }

  getPosition() {
    this.lastPosition = this.position;
    do {
      this.position = Math.floor(Math.random() * (this.board.boardSize));
    } while (this.position === this.lastPosition);
  }

  start() {
    this.click = true;
    this.interval = setInterval(() => {
      this.getPosition();
      this.board.fields.item(this.lastPosition).innerHTML = '';
      if (!this.click) {
        this.missed += 1;
        this.viewMissed.textContent = this.missed;
        if (this.missed > this.missedLimit) {
          this.viewMissed.textContent -= 1;
          this.stop();
          return undefined;
        }
      }
      this.board.fields.item(this.position).innerHTML = '<img class="goblin" src="goblin.png">';
      this.click = false;
      return undefined;
    }, 1000);
    this.gameStarted = true;
  }

  stop() {
    clearInterval(this.interval);
    this.gameStarted = false;
    alert('Вы проиграли!');
  }
}
