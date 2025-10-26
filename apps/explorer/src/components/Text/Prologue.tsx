import clsx from "clsx";
import "./prologue.css";

interface PrologueProps {
  /**
   * 內文
   */
  text: string;
}

/**
 * 開幕標題
 * 
 * @description
 * 用於關卡過場開幕
 * 
 * @remarks
 * - 單純文字樣式
 * - 需要額外搭配動畫效果
 *
 * @see {@link PrologueProps}
 *
 * @example
 * <Prologue text={text} />
 */
export const Prologue: React.FC<PrologueProps> = ({ text }) => {
  return <div className={clsx("prologue")}>{text}</div>;
};
