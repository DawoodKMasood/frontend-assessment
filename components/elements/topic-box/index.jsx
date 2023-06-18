import Link from "next/link";

import Title from "@/components/elements/title"
import Button from "@/components/elements/button";
import Label from "@/components/elements/label";
import Pen from "@/components/icons/pen";
import Trash from "@/components/icons/trash";

const TopicBox = (props) => {

    const { id, title, labels } = props;

    return (
        <Link href={`/editor/${id}`} className="px-4 py-4 hover:bg-slate-50 transition-all">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 flex-1">
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
                <div className="flex gap-2 justify-center items-center">
                    <Button type="primary">
                        <Pen classes="w-3" /> Write
                    </Button>
                    <Button type="error">
                        <Trash classes="w-3" /> Delete
                    </Button>
                </div>
            </div>
        </Link>
    )
}

export default TopicBox;