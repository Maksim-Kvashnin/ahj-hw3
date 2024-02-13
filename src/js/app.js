import GameBoard from './board';
import GamePlay from './game';

const gameBoard = new GameBoard(4);
const gamePlay = new GamePlay(gameBoard);
gamePlay.init();
gamePlay.start();
