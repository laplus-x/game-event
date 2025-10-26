import { AnimatePresence, motion } from "motion/react";

interface FadeProps {
  visible?: boolean;
  children: React.ReactNode;
}

/**
 * 淡出入動畫
 * 
 * @description
 * 用於元件平滑過渡
 *
 * @see {@link FadeProps}
 *
 * @example
 * <Fade visible={visible} />
 */
export const Fade: React.FC<FadeProps> = ({
  visible,
  children,
}) => {
  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="fade"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
