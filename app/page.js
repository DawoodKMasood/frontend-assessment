'use client'
import { useRecoilState } from "recoil";
import { useState } from "react";

import { selectedCategoryAtom } from "@/recoil/atom/selectedCategoryAtom";
import { categoriesAtom } from "@/recoil/atom/categoriesAtom";
import { topicsAtom } from "@/recoil/atom/topicsAtom";

import Title from "@/components/elements/title"
import Topics from "@/components/topics"
import Categories from "@/components/categories";
import AddTopic from "@/components/add-topic";
import Button from "@/components/elements/button";
import Sidebar from "@/components/elements/sidebar";
import ChevronRight from "@/components/icons/chevron-right";

export default function Home() {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [categories, _setCategories ] = useRecoilState(categoriesAtom);
  const [selectedCategory, _setSelectedCategory ] = useRecoilState(selectedCategoryAtom);
  const [topics, _setTopics] = useRecoilState(topicsAtom);
  const filteredTopics = selectedCategory !== 0 ? topics.filter(topic => topic.categoryId === selectedCategory) : topics;

  const toggleSidebar = () => {
    setSidebarVisibility(!sidebarVisibility)
  }

  return (
    <main className="flex gap-4">
      <div className="flex flex-col gap-6 flex-1 mx-6 my-10 h-screen">
        <Title title="Categories" size="large" />
        <div className="flex items-center justify-between">
          <Categories categories={categories} />
          <div className="flex gap-2 justify-center items-center">
            <Button type="primary" onClick={() => toggleSidebar()}>
              Add Topic <ChevronRight classes="w-3 h-3" />
            </Button>
          </div>
        </div>
        <Topics topics={filteredTopics} />
      </div>
      <Sidebar visibility={sidebarVisibility} setVisibility={setSidebarVisibility} title="Add Topic">
        <AddTopic />
      </Sidebar>
    </main>
  )
}
