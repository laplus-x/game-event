import off from "./assets/item/key_off.png";
import on from "./assets/item/key_on.png";
import "./keystate.css";

interface KeyImageProps {
  mode?: "on" | "off";
  width?: number;
  height?: number;
}

/**
 * 活動貨幣圖 - 鑰匙碎片
 *
 * @see {@link KeyImageProps}
 *
 * @example
 * ```
 * <KeyImage width={26} height={62} />
 * ```
 */
export const KeyImage: React.FC<KeyImageProps> = ({
  mode = "on",
  width = 20,
  height = 48,
}) => {
  const variants = {
    on,
    off,
  };
  return <img alt="key" src={variants[mode]} width={width} height={height} />;
};

interface KeyStateProps {
  value?: number;
  max?: number;
}

export const KeyState: React.FC<KeyStateProps> = ({ value = 0, max = 3 }) => {
  return (
    <div className="key-state">
      {Array.from({ length: max }, (_, idx) => (
        <KeyImage key={idx} mode={value - 1 >= idx ? "on" : "off"} />
      ))}
    </div>
  );
};
