import { v4 as uuidv4 } from "uuid";
import { atom } from "recoil";

export const categoriesAtom = atom({
  key: "categoriesState",
  default: [
    {
        id: uuidv4(),
        title: "All",
    },
    {
      id: uuidv4(),
      title: "Custom",
    },
    {
      id: uuidv4(),
      title: "ICP",
    },
    {
      id: uuidv4(),
      title: "Mission",
    },
    {
      id: uuidv4(),
      title: "Product",
    },
  ],
});