'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState, PLAYER_SYMBOLS
// are provided by game.js, loaded before this script.

const cells      = document.querySelectorAll('.cell');
const status     = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let state = createInitialState();

function render() {
  cells.forEach((cell, i) => {
    const token = state.board[i];
    cell.textContent = token ? PLAYER_SYMBOLS[token] : '';
    cell.className   = 'cell' + (token ? ` ${token.toLowerCase()}` : '');
    cell.disabled    = token !== '' || state.gameOver;
  });
}

function setStatus(msg, cls = '') {
  status.textContent = msg;
  status.className   = 'status' + (cls ? ` ${cls}` : '');
}

function handleClick(e) {
  const idx = Number(e.currentTarget.dataset.index);
  if (state.board[idx] || state.gameOver) return;

  const nextBoard = applyMove(state.board, idx, state.current);
  if (!nextBoard) return;
  state.board = nextBoard;
  render();

  cells[idx].classList.add('placed');

  const result = checkWinner(state.board);

  if (result) {
    state.gameOver = true;
    if (result.winner) {
      result.combo.forEach(i => cells[i].classList.add('winning'));
      setStatus(`Player ${PLAYER_SYMBOLS[result.winner]} wins!`, 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(`Player ${PLAYER_SYMBOLS[state.current]}'s turn`);
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(`Player ${PLAYER_SYMBOLS[state.current]}'s turn`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
setStatus(`Player ${PLAYER_SYMBOLS[state.current]}'s turn`);
