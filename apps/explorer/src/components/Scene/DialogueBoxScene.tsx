import { motion, type Variants } from "motion/react";
import "./dialogbox.css";

interface DialogueBoxSceneProps {
  mode?: "init" | "typing" | "leave";
  children: React.ReactNode;
}

export const DialogueBoxScene: React.FC<DialogueBoxSceneProps> = ({
  mode = "typing",
  children,
}) => {
  const variants: Variants = {
    init: { opacity: 0, transition: { duration: 0 } },
    typing: { opacity: 1, transition: { duration: 0.2, ease: "linear" } },
    leave: {
      opacity: 0,
      transition: { duration: 0.2, ease: "linear" },
    },
  };

  return (
    <motion.div
      className="dialogbox-scene"
      variants={variants}
      initial="init"
      animate={mode}
    >
      {children}
    </motion.div>
  );
};
