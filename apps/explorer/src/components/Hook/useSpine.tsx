import {
  SpinePlayer,
  type SpinePlayerConfig,
} from "@esotericsoftware/spine-player";
import { useEffect, useRef } from "react";
import { useInstance } from "./useInstance";

const defaultOptions: SpinePlayerConfig = {
  preserveDrawingBuffer: false,
  showControls: false,
  backgroundColor: "transparent",
  alpha: true,
};

/**
 * Spine Hook
 *
 * @description
 * 用於建立 SpinePlayer
 *
 * @see {@link SpinePlayerConfig}
 *
 * @example
 * const { scope, player } = useSpine(options)
 */
export const useSpine = (
  options: Omit<SpinePlayerConfig, "preserveDrawingBuffer">,
) => {
  const scope = useInstance<{
    current: HTMLDivElement | null;
    options: SpinePlayerConfig;
  }>(() => ({
    current: null,
    options: { ...defaultOptions, ...options },
  }));
  const player = useRef<SpinePlayer>(null);

  useEffect(() => {
    if (!scope.current) return;
    player.current ??= new SpinePlayer(scope.current, scope.options);
  }, [scope.current]);

  return { scope, player: player.current };
};
