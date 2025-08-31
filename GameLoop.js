function gameLoop() {
  updateGame();
  renderGame();
  requestAnimationFrame(gameLoop);
}
gameLoop();
