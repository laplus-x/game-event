import { TokenImage } from "@explorer/components/Image";
import bg from "./assets/btn-play.png";
import "./explorebutton.css";

const formatter = new Intl.NumberFormat();

interface ExploreButtonProps {
  /**
   * 探索一次消耗的行動力
   */
  cost: number;
  /**
   * 探索次數
   */
  time: number;

  disabled?: boolean;
  onClick: () => void;
}

/**
 * 探索按鈕
 *
 * @description
 * 用於呼叫後端 API 消耗行動力
 *
 * @remarks
 * - 支援 禁用、下壓 效果
 * - 不支援 加載中 效果
 *
 * @see {@link ExploreButtonProps}
 *
 * @example
 * ```
 * <ExploreButton cost={25} time={1} />
 * ```
 */
export const ExploreButton: React.FC<ExploreButtonProps> = ({
  cost,
  time,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className="explore-btn"
      onClick={onClick}
      style={{ backgroundImage: `url(${bg})` }}
      disabled={disabled || time < 1}
    >
      <span className="explore-btn-title">
        {time <= 1 && "一次探索"}
        {time > 1 && "本次探索"}
      </span>
      <div className="explore-btn-desc">
        <TokenImage width={16} height={16} />
        <span>{formatter.format(cost * (time || 1))}</span>
      </div>
    </button>
  );
};
