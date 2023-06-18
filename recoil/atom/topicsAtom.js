import { atom } from "recoil";

export const topicsAtom = atom({
  key: "topicsState",
  default: [
    {
        categoryId: 1,
        id: 0,
        title: "How to kill a bird!",
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
      id: 1,
      title: "Best practices for SEO?",
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