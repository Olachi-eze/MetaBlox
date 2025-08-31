// GameLoop.js
function gameLoop() {
  updateEntities();
  renderScene();
  requestAnimationFrame(gameLoop);
}

function updateEntities() {
  // Move NPCs, check collisions, etc.
}

function renderScene() {
  // Draw blocks, players, UI
}

gameLoop();
