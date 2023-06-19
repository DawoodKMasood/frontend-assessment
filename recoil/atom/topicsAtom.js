import { atom } from "recoil";

export const topicsAtom = atom({
  key: "topicsState",
  default: [
    {
        categoryId: 1,
        id: 0,
        title: "The Importance of Establishing a strong Online Presence for Small Bussinesses",
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
      title: "Best Practices for SEO",
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