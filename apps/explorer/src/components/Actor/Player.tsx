import idle from "./assets/player/idle.png";
import "./player.css";

interface PlayerProps {
  mode?: "idle" | "run" | "attack";
}

/**
 * 玩家
 *
 * @see {@link PlayerProps}
 *
 * @example
 * ```
 * <Player mode={mode} />
 * ```
 */
export const Player: React.FC<PlayerProps> = ({ mode = "idle" }) => {
  return (
    <div className="player">
      <img alt={mode} src={idle} width={150} />
    </div>
  );
};
