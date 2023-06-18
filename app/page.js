'use client'
import { useRecoilState } from "recoil";


import { selectedCategoryAtom } from "@/recoil/atom/selectedCategoryAtom";
import { categoriesAtom } from "@/recoil/atom/categoriesAtom";
import { topicsAtom } from "@/recoil/atom/topicsAtom"

import Title from "@/components/elements/title"
import Topics from "@/components/topics"
import CategoriesSelection from "@/components/categories-selection";

export default function Home() {
  const [categories, _setCategories ] = useRecoilState(categoriesAtom);
  const [selectedCategory, _setSelectedCategory ] = useRecoilState(selectedCategoryAtom);
  const [topics, _setTopics] = useRecoilState(topicsAtom);
  const filteredTopics = selectedCategory !== 0 ? topics.filter(topic => topic.categoryId === selectedCategory) : topics;

  return (
    <main className="mx-6 my-10">
      <div className="flex flex-col gap-6">
        <Title title="Categories" size="large" />
        <CategoriesSelection categories={categories} />
        <Topics topics={filteredTopics} />
      </div>
    </main>
  )
}
