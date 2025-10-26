import clouds from "./assets/stage-bg/cloud.png";
import far from "./assets/stage-bg/far-field.png";
import near from "./assets/stage-bg/near-field.png";
import sky from "./assets/stage-bg/sky.png";

interface StageBackgroundProps {
  /**
   * 關卡層數
   * 
   * @description
   * 用於切換不同關卡的背景圖，總共有 9 張
   */
  stage: number;
  width: number;
  height: number;
}

/**
 * 關卡背景圖 - 天空
 *
 * @description
 * 用於 視差滾動 效果
 *
 * @see {@link StageBackgroundProps}
 *
 * @example
 * <StageBackgroundSkyImage stage={1} width={480} height={360} />
 */
export const StageBackgroundSkyImage: React.FC<StageBackgroundProps> = ({
  // stage,
  width,
  height,
}) => {
  return <img alt="stage-bg-sky" src={sky} width={width} height={height} />;
};

/**
 * 關卡背景圖 - 雲層
 *
 * @description
 * 用於 視差滾動 效果
 *
 * @see {@link StageBackgroundProps}
 *
 * @example
 * <StageBackgroundCloudImage stage={1} width={480} height={360} />
 */
export const StageBackgroundCloudImage: React.FC<StageBackgroundProps> = ({
  // stage,
  width,
  height,
}) => {
  return (
    <img alt="stage-bg-cloud" src={clouds} width={width} height={height} />
  );
};

/**
 * 關卡背景圖 - 遠景
 *
 * @description
 * 用於 視差滾動 效果
 *
 * @see {@link StageBackgroundProps}
 *
 * @example
 * <StageBackgroundFarFieldImage stage={1} width={480} height={360} />
 */
export const StageBackgroundFarFieldImage: React.FC<StageBackgroundProps> = ({
  // stage,
  width,
  height,
}) => {
  return (
    <img alt="stage-bg-far-field" src={far} width={width} height={height} />
  );
};

/**
 * 關卡背景圖 - 近景
 *
 * @description
 * 用於 視差滾動 效果
 *
 * @see {@link StageBackgroundProps}
 *
 * @example
 * <StageBackgroundNearFieldImage stage={1} width={480} height={360} />
 */
export const StageBackgroundNearFieldImage: React.FC<StageBackgroundProps> = ({
  // stage,
  width,
  height,
}) => {
  return (
    <img alt="stage-bg-near-field" src={near} width={width} height={height} />
  );
};
