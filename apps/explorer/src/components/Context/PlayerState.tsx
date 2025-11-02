import type { Dayjs } from "dayjs";
import { atom } from "jotai";

interface PlayerState {
  curStageNo: number;
  curPointSum: number;
  curTokenSum: number;
  totalExploreCnt: number;
  availExploreCnt: number;
  nextFreeTokenTime: Dayjs;
}

export const playerStateAtom = atom<PlayerState>();
