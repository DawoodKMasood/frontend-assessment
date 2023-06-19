import { useRouter } from 'next/navigation';
import { useRecoilState } from "recoil";

import { topicsAtom } from "@/recoil/atom/topicsAtom";

import Title from "@/components/elements/title"
import Button from "@/components/elements/button";
import Label from "@/components/elements/label";
import Pen from "@/components/icons/pen";
import Trash from "@/components/icons/trash";

const TopicBox = (props) => {
    const router = useRouter();

    const [_topics, setTopics] = useRecoilState(topicsAtom);

    const { id, title, labels } = props;

    const onDeleteTopic = (topicId) => {
        setTopics((prevTopics) => prevTopics.filter((topic) => topic.id !== topicId));
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
        router.push(`/editor/${id}`);
    };

    return (
        <div className="px-4 py-4 hover:bg-slate-50 transition-all">
            <div className="flex flex-col md:flex-row gap-y-2 justify-between items-start md:items-center">
                <div className="flex flex-col gap-x-1 gap-y-1 flex-1">
                    <div>
                        <Title size="medium" title={title} />
                    </div>
                    <div className="flex gap-2">
                        {labels?.length ? labels.map((label) => (
                            <Label colour={label.colour} key={label.id} title={label.title} />
                        )) : (
                            <div className="text-sm text-slate-500">
                                No labels assigned!
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-2 justify-start md:justify-center items-center">
                    <Button type="primary" onClick={(e) => handleLinkClick(e)}>
                        <Pen classes="w-3 h-3" /> Write
                    </Button>
                    <Button type="error" onClick={() => onDeleteTopic(id)}>
                        <Trash classes="w-3 h-3" /> Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TopicBox;