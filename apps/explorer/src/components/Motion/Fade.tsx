import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react";
import React from "react";

interface FadeProps extends HTMLMotionProps<"div"> {
  visible?: boolean;
}

/**
 * 淡出入動態特效
 *
 * @description
 * 用於元件平滑過渡
 *
 * @see {@link FadeProps}
 *
 * @example
 * ```
 * <Fade visible={visible} />
 * ```
 */
export const Fade: React.FC<FadeProps> = ({ visible, ...reset }) => {
  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          {...reset}
          key="fade"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
};
