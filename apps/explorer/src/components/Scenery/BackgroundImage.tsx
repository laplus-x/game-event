import orig from "./assets/background/bg-1.png";
import clouds from "./assets/background/cloud.png";
import far from "./assets/background/far-field.png";
import near from "./assets/background/near-field.png";
import sky from "./assets/background/sky.png";

interface BackgroundProps {
  /**
   * 關卡層數
   *
   * @description
   * 用於切換不同關卡的背景圖，總共有 9 張
   */
  width: number;
  height: number;
}

/**
 * 關卡背景圖 - 天空
 *
 * @description
 * 用於 視差滾動 效果
 *
 * @see {@link BackgroundProps}
 *
 * @example
 * ```
 * <BackgroundSkyImage stage={1} width={480} height={360} />
 * ```
 */
export const BackgroundSkyImage: React.FC<BackgroundProps> = ({
  width,
  height,
}) => {
  return <img alt="background-sky" src={sky} width={width} height={height} />;
};

/**
 * 關卡背景圖 - 雲層
 *
 * @description
 * 用於 視差滾動 效果
 *
 * @see {@link BackgroundProps}
 *
 * @example
 * ```
 * <BackgroundCloudImage stage={1} width={480} height={360} />
 * ```
 */
export const BackgroundCloudImage: React.FC<BackgroundProps> = ({
  width,
  height,
}) => {
  return (
    <img alt="background-cloud" src={clouds} width={width} height={height} />
  );
};

/**
 * 關卡背景圖 - 遠景
 *
 * @description
 * 用於 視差滾動 效果
 *
 * @see {@link BackgroundProps}
 *
 * @example
 * ```
 * <BackgroundFarFieldImage stage={1} width={480} height={360} />
 * ```
 */
export const BackgroundFarFieldImage: React.FC<BackgroundProps> = ({
  width,
  height,
}) => {
  return (
    <img alt="background-far-field" src={far} width={width} height={height} />
  );
};

/**
 * 關卡背景圖 - 近景
 *
 * @description
 * 用於 視差滾動 效果
 *
 * @see {@link BackgroundProps}
 *
 * @example
 * ```
 * <BackgroundNearFieldImage stage={1} width={480} height={360} />
 * ```
 */
export const BackgroundNearFieldImage: React.FC<BackgroundProps> = ({
  width,
  height,
}) => {
  return (
    <img alt="background-near-field" src={near} width={width} height={height} />
  );
};

/**
 * 關卡背景圖
 *
 * @see {@link BackgroundProps}
 *
 * @example
 * ```
 * <BackgroundImage stage={1} width={480} height={360} />
 * ```
 */
export const BackgroundImage: React.FC<BackgroundProps> = ({
  width,
  height,
}) => {
  return <img alt="background" src={orig} width={width} height={height} />;
};
