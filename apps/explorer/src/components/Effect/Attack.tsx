import type React from "react";
import slash from "./assets/attack/slash.webm";

interface AttackProps {
  mode?: "init" | "slash";
  loop?: boolean;
}

/**
 * 攻擊特效
 *
 * @see {@link AttackProps}
 *
 * @example
 * ```
 * <Attack mode="slash" />
 * ```
 */
export const Attack: React.FC<AttackProps> = ({ mode, loop }) => {
  return (
    <div className="attack">
      {mode === "slash" && (
        <video width={150} autoPlay loop={loop}>
          <source src={slash} type="video/webm" />
        </video>
      )}
    </div>
  );
};
