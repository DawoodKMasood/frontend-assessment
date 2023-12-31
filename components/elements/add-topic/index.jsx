import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";

import { topicsAtom } from "@/recoil/atom/topicsAtom";

import Button from "../button";
import Input from "../input";
import Label from "../label";

import { generateRandomColor } from "@/utils/functions";

const AddTopic = () => {
  const [labelInput, setLabelInput] = useState("");
  const [labels, setLabels] = useState([]);
  const [topicTitle, setTopicTitle] = useState("");

  const [topics, setTopics] = useRecoilState(topicsAtom);

  const onTitleChange = (e) => {
    const { value } = e.target;
    setTopicTitle(value);
  };

  const onLabelChange = (e) => {
    const { value } = e.target;
    setLabelInput(value);
  };

  const onLabelKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const labelTitle = labelInput.trim();
      if (labelTitle) {
        const newLabel = {
          colour: generateRandomColor(),
          id: uuidv4(),
          title: labelTitle,
        };
        setLabels((prevLabels) => [...prevLabels, newLabel]);
        setLabelInput("");
      }
    }
  };

  const onSubmit = () => {
    const newTopic = {
      categoryId: 1,
      id: uuidv4(),
      title: topicTitle,
      content: "",
      labels: labels,
    };

    setTopics((prevTopics) => [...prevTopics, newTopic]);
    setTopicTitle("");
    setLabels([]);
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={topicTitle}
        onChange={onTitleChange}
        placeholder="Enter Topic Title"
        type="text"
      />
      <Input
        value={labelInput}
        onKeyDown={onLabelKeyDown}
        onChange={onLabelChange}
        placeholder="Enter Labels (seo, marketing, etc...)"
        type="text"
      />
      <div className="flex flex-wrap gap-x-1 gap-y-2">
        {labels.length > 0 ? (
          labels.map((label) => (
            <Label colour={label.colour} key={label.id} title={label.title} />
          ))
        ) : (
          <div className="text-sm text-slate-500">No labels assigned!</div>
        )}
      </div>
      <Button type="primary" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default AddTopic;