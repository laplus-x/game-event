import {
  SpinePlayer,
  type SpinePlayerConfig,
} from "@esotericsoftware/spine-player";

const defaultOptions: SpinePlayerConfig = {
  preserveDrawingBuffer: false,
  showControls: false,
  backgroundColor: "transparent",
  alpha: true,
};

/**
 * Spine Player Hook
 * 
 * @description
 * 用於填補參數設定
 *
 * @see {@link SpinePlayerConfig}
 *
 * @example
 * const init = useSpine(options)
 */
export const useSpine = (
  options: Omit<SpinePlayerConfig, "preserveDrawingBuffer">,
) => {
  const opts = { ...defaultOptions, ...options };

  return (element: string | HTMLElement) => new SpinePlayer(element, opts);
};
