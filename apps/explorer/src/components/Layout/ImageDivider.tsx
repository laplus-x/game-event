import clsx from "clsx";
import "./imagedivider.css";

interface ImageDividerProps {
  /**
   * 分隔線尺寸
   */
  size?: "small" | "middle" | "large";
  /**
   * 圖示
   */
  image: string;
  /**
   * 圖示大小
   */
  slice: number;
}

/**
 * 圖示分隔線
 * 
 * @description
 * 不斷重複簡易圖示而組成的分隔線
 * 
 * @remarks
 * - 只支援水平線
 * - 不支援內嵌文字
 *
 * @see {@link ImageDividerProps}
 *
 * @example
 * <ImageDivider image={image} slice={30} />
 */
export const ImageDivider: React.FC<ImageDividerProps> = ({
  size = "middle",
  image,
  slice,
}) => {
  return (
    <div className={clsx("image-divider")}>
      <div
        className={clsx("image-divider-border", `image-divider-border--size__${size}`)}
        style={{
          borderImageSource: `url(${image})`,
          borderImageWidth: `${slice}px`,
          borderImageSlice: slice,
        }}
      ></div>
    </div>
  );
};
