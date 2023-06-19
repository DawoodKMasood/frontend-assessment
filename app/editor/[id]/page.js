'use client'

import { useRouter } from 'next/navigation';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';

import { topicsAtom } from '@/recoil/atom/topicsAtom';
import { isNumber, isString } from '@/utils/functions';

import Sidebar from '@/components/elements/sidebar';
import ChevronLeft from '@/components/icons/chevron-left';
import Button from '@/components/elements/button';
import EditorOperations from '@/components/elements/editor-operations';

const Page = ({ params }) => {
  const id = params.id;

  const router = useRouter();
  const [topics, setTopics] = useRecoilState(topicsAtom);
  const [editorTitle, setEditorTitle] = useState('');
  const [editorValue, setEditorValue] = useState('');
  const [sidebarVisibility, setSidebarVisibility] = useState(true);

  useEffect(() => {
    if (topics?.length) {
      const topic = topics.find((topic) => topic.id === (isNumber(id) ? Number(id) : isString(id) ? String(id) : id));
      if (topic) {
        setEditorTitle(topic.title || '');
        setEditorValue(topic.content || '');
      } else {
        router.push('/404'); // Not found page or appropriate error handling
      }
    }
  }, [id, topics, router]);

  const onEditorTitleChange = (e) => {
    setEditorTitle(e.target.value);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-6 flex-1 mx-6 my-10 h-screen">
        <div className="flex flex-col gap-4">
          <Button classes="max-w-fit" type="secondary" onClick={handleLinkClick}>
            <ChevronLeft classes="w-4 h-4" /> Go Back
          </Button>
          <input
            className="text-lg focus:outline-none focus:ring-0"
            value={editorTitle}
            onChange={onEditorTitleChange}
            placeholder="Enter a Title"
          />
        </div>
        <ReactQuill
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block'],
            ],
          }}
          className="min-h-[500px]"
          theme="snow"
          value={editorValue}
          onChange={setEditorValue}
          placeholder="Compose an epic..."
        />
      </div>
      <Sidebar visibility={sidebarVisibility} setVisibility={setSidebarVisibility} hideX={true} title="Operations">
        <EditorOperations setEditorValue={setEditorValue} />
      </Sidebar>
    </div>
  );
};

export default Page;