import type {
  SpinePlayer,
  SpinePlayerConfig,
} from "@esotericsoftware/spine-player";
import { useEffect, useRef, type HTMLAttributes } from "react";
import { useSpine } from "./useSpine";
import atlasData from "/spineboy/spineboy-pma.atlas";
import skelData from "/spineboy/spineboy-pro.skel";

interface SpineBoyProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onError" | "onLoad"> {
  mode: "run" | "walk" | "jump";
  loop?: boolean;
  onInit?: SpinePlayerConfig["success"];
  onError?: SpinePlayerConfig["error"];
  onLoad?: SpinePlayerConfig["loading"];
  onUpdate?: SpinePlayerConfig["update"];
}

/**
 * 角色動畫
 * 
 * @description
 * 透過封裝簡易控制動畫狀態
 * 
 * @remarks
 * - 整合 Spine 動畫範例
 *
 * @see {@link SpineBoyProps}
 *
 * @example
 * <SpineBoy mode={mode} />
 */
export const SpineBoy: React.FC<SpineBoyProps> = ({
  mode,
  loop,
  onInit,
  onError,
  onLoad,
  onUpdate,
  ...reset
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const player = useRef<SpinePlayer>(null);

  const init = useSpine({
    atlas: atlasData,
    skeleton: skelData,
    animation: mode,
    success: onInit,
    error: onError,
    loading: onLoad,
    update: onUpdate,
  });

  useEffect(() => {
    if (!ref.current) return;

    const instance = init(ref.current);
    player.current = instance;

    return () => instance.dispose();
  }, []);

  useEffect(() => {
    if (!player.current?.skeleton) return;

    player.current.setAnimation(mode, loop);
  }, [player.current, mode, loop]);

  return <div {...reset} ref={ref} />;
};
