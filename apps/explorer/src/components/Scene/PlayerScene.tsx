import { motion, type Variants } from "motion/react";
import type React from "react";
import "./player.css";

interface PlayerSceneProps {
  mode?: "init" | "move";
  children: React.ReactNode;
}

export const PlayerScene: React.FC<PlayerSceneProps> = ({ mode = "init", children }) => {
  const variants: Variants = {
    init: { x: 0, transition: { duration: 0 } },
    move: {
      x: `30%`,
      transition: { duration: 0.6, ease: "linear" },
    },
  };
  return (
    <motion.div className="player-scene" variants={variants} animate={mode}>
      {children}
    </motion.div>
  );
};
