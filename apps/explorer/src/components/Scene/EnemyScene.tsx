import { motion, type Variants } from "motion/react";
import "./enemy.css";

interface EnemySceneProps {
  mode?: "init" | "move" | "leave";
  children: React.ReactNode;
}

export const EnemyScene: React.FC<EnemySceneProps> = ({ mode = "move", children }) => {
  const variants: Variants = {
    init: { x: `50%`, opacity: 1, transition: { duration: 0 } },
    move: { x: 0, transition: { duration: 0.6, ease: "linear" } },
    leave: {
      opacity: 0,
      transition: { duration: 0.6, ease: "linear" },
      transitionEnd: { x: `100%`, opacity: 1 },
    },
  };

  return (
    <motion.div className="enemy-scene" variants={variants} initial="init" animate={mode}>
      {children}
    </motion.div>
  );
};
