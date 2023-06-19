import { v4 as uuidv4 } from "uuid";
import { atom } from "recoil";

export const tonesAtom = atom({
  key: "tonesState",
  default: [
    {
        id: uuidv4(),
        title: "Witty",
        value: "witty",
    },
    {
        id: uuidv4(),
        title: "Happy",
        value: "happy",
    },
    {
      id: uuidv4(),
      title: "Angry",
      value: "angry",
    },
  ],
});