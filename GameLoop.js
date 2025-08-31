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
  document.querySelector("button").addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  const name = inputs[0].value;
  const x = parseInt(inputs[1].value);
  const y = parseInt(inputs[2].value);
  const z = parseInt(inputs[3].value);
  console.log(`Teleporting ${name} to (${x}, ${y}, ${z})`);
  // You can link this to your TypeScript backend or game engine
});
  
}

gameLoop();
