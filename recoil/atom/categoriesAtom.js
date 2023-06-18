import { atom } from "recoil";

export const categoriesAtom = atom({
  key: "categoriesState",
  default: [
    {
        id: 0,
        title: "All",
        value: "all"
    },
    {
      id: 1,
      title: "Custom",
      value: "custom"
    },
    {
      id: 2,
      title: "ICP",
      value: "icp"
    },
    {
      id: 3,
      title: "Mission",
      value: "mission"
    },
    {
      id: 4,
      title: "Product",
      value: "product"
    },
  ],
});