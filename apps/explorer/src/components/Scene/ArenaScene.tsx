import type React from "react";
import "./arena.css";

interface ArenaSceneProps {
  player: React.ReactNode;
  enemy: React.ReactNode;
}

export const ArenaScene: React.FC<ArenaSceneProps> = ({ player, enemy }) => {
  return (
    <div className="arena-scene">
      {player}
      {enemy}
    </div>
  );
};
