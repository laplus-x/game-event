import { Typewriter } from "@explorer/components/Motion";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import image from "./assets/frame/dialogbox.png";
import "./dialogbox.css";

interface DialogueBoxProps {
  /**
   * 台詞
   */
  text?: string;
  /**
   * 台詞結束事件
   */
  onFinish?: () => void;
}

/**
 * 對話框
 *
 * @description
 * 用於顯示探索事件結果
 *
 * @remarks
 * - 支援換行符號
 * - 支援跳過打字動態特效
 * - 不支援淡入淡出動態特效
 *
 * @see {@link DialogueBoxProps}
 *
 * @example
 * ```
 * <DialogueBox text={text} />
 * ```
 */
export const DialogueBox: React.FC<DialogueBoxProps> = ({
  text = "A wild monster appeared!",
  onFinish,
}) => {
  const [typing, setTyping] = useState<boolean>(false);

  const onComplete = () => {
    if (typing) {
      setTyping(false);
    } else {
      onFinish?.();
    }
  };

  useEffect(() => {
    setTyping(true);
  }, [text]);

  return (
    <button
      className={clsx("dialogbox", typing && "typing")}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onComplete}
    >
      {typing && <Typewriter text={text} delay={30} onComplete={onComplete} />}
      {!typing && <span>{text}</span>}
    </button>
  );
};
