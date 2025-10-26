import {
  StageBackgroundCloudImage,
  StageBackgroundFarFieldImage,
  StageBackgroundNearFieldImage,
  StageBackgroundSkyImage,
} from "@explorer/components/Image";
import { useAnimate, type ValueAnimationTransition } from "motion/react";
import { useEffect, useState } from "react";
import "./stagebackground.css";

interface StageBackgroundProps {
  stage: number;
  wave: number;
  width: number;
  height: number;
}

export const StageBackgroundSky: React.FC<StageBackgroundProps> = ({
  wave,
  ...reset
}) => {
  return <StageBackgroundSkyImage {...reset} />;
};

export const StageBackgroundCloud: React.FC<StageBackgroundProps> = ({
  wave,
  ...reset
}) => {
  const slice = 10;
  const w = reset.width / slice;
  const i = (wave % slice) + 1;
  const [scope, animate] = useAnimate();
  const [init, setInit] = useState<boolean>(true);

  useEffect(() => {
    const onMove = async () => {
      const options: ValueAnimationTransition = init
        ? { duration: 0 }
        : { duration: 0.6, ease: "linear" };
      await animate(scope.current, { x: `${-w * i}px` }, options);
      if (init) setInit(false);
      if (i !== slice) return;
      await animate(scope.current, { x: 0 }, { duration: 0 });
    };
    onMove();
  }, [wave]);

  return (
    <div className="stage-bg-far-field" ref={scope}>
      <StageBackgroundCloudImage {...reset} />
      <StageBackgroundCloudImage {...reset} />
    </div>
  );
};

export const StageBackgroundFarField: React.FC<StageBackgroundProps> = ({
  wave,
  ...reset
}) => {
  const slice = 5;
  const w = reset.width / slice;
  const i = (wave % slice) + 1;
  const [scope, animate] = useAnimate();
  const [init, setInit] = useState<boolean>(true);

  useEffect(() => {
    const onMove = async () => {
      const options: ValueAnimationTransition = init
        ? { duration: 0 }
        : { duration: 0.6, ease: "linear" };
      await animate(scope.current, { x: `${-w * i}px` }, options);
      if (init) setInit(false);
      if (i !== slice) return;
      await animate(scope.current, { x: 0 }, { duration: 0 });
    };
    onMove();
  }, [wave]);

  return (
    <div className="stage-bg-far-field" ref={scope}>
      <StageBackgroundFarFieldImage {...reset} />
      <StageBackgroundFarFieldImage {...reset} />
    </div>
  );
};

export const StageBackgroundNearField: React.FC<StageBackgroundProps> = ({
  wave,
  ...reset
}) => {
  const slice = 1;
  const w = reset.width / slice;
  const i = (wave % slice) + 1;
  const [scope, animate] = useAnimate();
  const [init, setInit] = useState<boolean>(true);

  useEffect(() => {
    const onMove = async () => {
      const options: ValueAnimationTransition = init
        ? { duration: 0 }
        : { duration: 0.6, ease: "linear" };
      await animate(scope.current, { x: `${-w * i}px` }, options);
      if (init) setInit(false);
      if (i !== slice) return;
      await animate(scope.current, { x: 0 }, { duration: 0 });
    };
    onMove();
  }, [wave]);

  return (
    <div className="stage-bg-near-field" ref={scope}>
      <StageBackgroundNearFieldImage {...reset} />
      <StageBackgroundNearFieldImage {...reset} />
    </div>
  );
};


/**
 * 關卡背景移動動態特效
 *
 * @remarks
 * - 支援 視差滾動 效果
 *
 * @see {@link StageBackgroundProps}
 *
 * @example
 * ```
 * <StageBackground stage={1} wave={1} width={480} height={360} />
 * ```
 */
export const StageBackground: React.FC<StageBackgroundProps> = (props) => {
  return (
    <div
      className="stage-bg"
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
    >
      <StageBackgroundSky {...props} />
      <StageBackgroundCloud {...props} />
      <StageBackgroundFarField {...props} />
      <StageBackgroundNearField {...props} />
    </div>
  );
};
