import { atom } from "recoil";

export const selectedCategoryAtom = atom({
  key: "selectedCategoryState",
  default: 0,
});