import { Dayjs } from "dayjs";
import { atom } from "jotai";

interface ActivitySetting {
  beginTime: Dayjs;
  endTime: Dayjs;
  playableTime: Dayjs;
  drawableTime: Dayjs;
}

interface StageSetting {
  stageNo: number;
  name: string;
  backgroundImage: string;

  stageEvents: StageEventSetting[];
}

interface StageEventSetting {
  id: number;
  name: string;
  pic: string;
}

export const activitySettingAtom = atom<ActivitySetting>();

export const stageSettingAtom = atom<StageSetting>();

export const selectStageEventSetting = (id: number) => {
  return atom((get) =>
    get(stageSettingAtom)?.stageEvents.find((e) => e.id === id),
  );
};
