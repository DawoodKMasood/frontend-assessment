import { atom } from "recoil";

export const categoriesAtom = atom({
  key: "categoriesState",
  default: [
    {
        id: 0,
        title: "All",
    },
    {
      id: 1,
      title: "Custom",
    },
    {
      id: 2,
      title: "ICP",
    },
    {
      id: 3,
      title: "Mission",
    },
    {
      id: 4,
      title: "Product",
    },
  ],
});