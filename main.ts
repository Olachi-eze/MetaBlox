// main.ts
interface Player {
  id: string;
  name: string;
  position: { x: number; y: number; z: number };
}

function teleport(player: Player, x: number, y: number, z: number): void {
  player.position = { x, y, z };
  console.log(`${player.name} teleported to (${x}, ${y}, ${z})`);
}
