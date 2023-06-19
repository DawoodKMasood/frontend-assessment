import { v4 as uuidv4 } from "uuid";
import { atom } from "recoil";

export const topicsAtom = atom({
  key: "topicsState",
  default: [
    {
        categoryId: 1,
        id: uuidv4(),
        title: "The Importance of Establishing a strong Online Presence for Small Bussinesses",
        content: "",
        labels: [
            {
                colour: "#008000",
                id: 0,
                title: "digital marketing",
            }
        ]
    },
    {
      categoryId: 2,
      id: uuidv4(),
      title: "Best Practices for SEO",
      content: "",
      labels: [
          {
              colour: "#aaa000",
              id: 0,
              title: "seo",
          }
      ]
  },
  ],
});