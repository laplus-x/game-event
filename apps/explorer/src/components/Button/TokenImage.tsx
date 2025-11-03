import image from "./assets/token.png";

interface TokenImageProps {
  width?: number;
  height?: number;
}

/**
 * 活動貨幣圖 - 行動力
 *
 * @see {@link TokenImageProps}
 *
 * @example
 * ```
 * <TokenImage width={480} height={360} />
 * ```
 */
export const TokenImage: React.FC<TokenImageProps> = ({ width = 16, height = 16 }) => {
  return <img alt="token" src={image} width={width} height={height} />;
};
