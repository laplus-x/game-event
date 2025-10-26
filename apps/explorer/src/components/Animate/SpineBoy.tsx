import type { SpinePlayerConfig } from "@esotericsoftware/spine-player";
import { useSpine } from "@explorer/components/Hook";
import { useEffect, type HTMLAttributes } from "react";
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
 * ```
 * <SpineBoy mode={mode} />
 * ```
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
  const { scope, player } = useSpine({
    atlas: "/spineboy/spineboy-pma.atlas",
    skeleton: "/spineboy/spineboy-pro.skel",
    animation: mode,
    success: onInit,
    error: onError,
    loading: onLoad,
    update: onUpdate,
  });

  useEffect(() => {
    if (!player?.skeleton) return;

    player?.setAnimation(mode, loop);
  }, [player, mode, loop]);

  useEffect(() => {
    return () => player?.dispose();
  }, []);

  return <div {...reset} ref={scope} />;
};
