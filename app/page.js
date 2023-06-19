'use client'

import { useRecoilState } from "recoil";
import { useState } from "react";

import { selectedCategoryAtom } from "@/recoil/atom/selectedCategoryAtom";
import { categoriesAtom } from "@/recoil/atom/categoriesAtom";
import { topicsAtom } from "@/recoil/atom/topicsAtom";

import Title from "@/components/elements/title"
import Topics from "@/components/topics"
import Categories from "@/components/categories";
import AddTopic from "@/components/elements/add-topic";
import Button from "@/components/elements/button";
import Sidebar from "@/components/elements/sidebar";
import ChevronRight from "@/components/icons/chevron-right";

const Home = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [categories] = useRecoilState(categoriesAtom);
  const [selectedCategory] = useRecoilState(selectedCategoryAtom);
  const [topics] = useRecoilState(topicsAtom);
  const filteredTopics = selectedCategory ? topics.filter(topic => topic.categoryId === selectedCategory) : topics;

  const toggleSidebar = () => {
    setSidebarVisibility(prevVisibility => !prevVisibility);
  };

  return (
    <main className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-6 flex-1 mx-6 my-10 h-screen">
        <Title title="Categories" size="large" />
        <div className="flex flex-col md:flex-row gap-x-2 gap-y-4 items-start md:items-center justify-between">
          <Categories categories={categories} />
          <div className="flex gap-2 justify-center items-center">
            <Button type="primary" onClick={toggleSidebar}>
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

export default Home;