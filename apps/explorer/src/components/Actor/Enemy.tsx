import { selectStageEventSetting } from "@explorer/components/Context";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
import slime from "./assets/enemy/slime.png";
import "./enemy.css";

interface EnemyProps {
  id?: number;
}

/**
 * 敵人
 *
 * @see {@link EnemyProps}
 *
 * @example
 * ```
 * <Enemy id={1} />
 * ```
 */
export const Enemy: React.FC<EnemyProps> = ({ id = 0 }) => {
  const item = useAtomValue(useMemo(() => selectStageEventSetting(id), [id]));

  return (
    <div className="enemy">
      <img alt={item?.name ?? "slime"} src={item?.pic ?? slime} width={200} />
    </div>
  );
};
