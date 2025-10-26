import { useEffect, useState } from "react";

interface TypewriterProps {
  /**
   * 內文
   */
  text: string;
  /**
   * 打字間隔時間
   */
  delay?: number;
  /**
   * 特效完成事件
   */
  onComplete?: () => void;
}

/**
 * 打字動態特效
 * 
 * @description
 * 用於對話框台詞
 * 
 * @remarks
 * - 不支援換行符號
 *
 * @see {@link TypewriterProps}
 *
 * @example
 * ```
 * <Typewriter text={text} delay={30} />
 * ```
 */
export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 30,
  onComplete,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex == text.length) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return <span className="typewriter">{currentText}</span>;
};
