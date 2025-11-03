import { motion, type Variants } from "motion/react";
import "./background.css";

interface BackgroundSceneProps {
  offset?: number;
  slice?: number;
  children: React.ReactNode;
}

/**
 * 關卡背景移動動態特效
 *
 * @see {@link BackgroundSceneProps}
 *
 * @example
 * ```
 * <BackgroundScene offset={1} slice={2} />
 * ```
 */
export const BackgroundScene: React.FC<BackgroundSceneProps> = ({
  offset = 0,
  slice = 2,
  children,
}) => {
  const w = 100 / slice;
  const i = (offset % slice) + 1;

  const offsets = Array.from({ length: slice }, (_, i) => i).reduce<Variants>(
    (prev, curr) => {
      prev[`offset${curr + 1}`] = {
        x: `${-w * i}%`,
        transition: { duration: 0.6, ease: "linear" },
        transitionEnd: i === slice ? { x: 0 } : undefined,
      };
      return prev;
    },
    {},
  );

  const variants: Variants = {
    init: { x: `${-w * i}%`, transition: { duration: 0 } },
    ...offsets,
  };

  return (
    <motion.div
      className="background-scene"
      variants={variants}
      initial="init"
      animate={`offset${i}`}
    >
      {children}
      {children}
    </motion.div>
  );
};
