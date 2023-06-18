import GroupBox from "@/components/elements/group-box"
import Table from "@/components/elements/table"
import TopicBox from "@/components/elements/topic-box"

const RenderEmptyTopics = () => (
    <div className="flex justify-center py-4">
        <span className="text-slate-500">
            No topics found!
        </span>
    </div>
)

const RenderLoader = () => (
    <div className="py-4 px-4">
        <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
                <div className="flex gap-x-2" key={index}>
                    <div className="bg-slate-100 h-[60px] flex-1 rounded-[10px] animate-pulse" />
                    <div className="bg-slate-100 h-[60px] w-[150px] rounded-[10px] animate-pulse" />
                </div>
            ))}
        </div>
    </div>
)

const Topics = (props) => {

    const { topics } = props;

    return (
        <GroupBox title="Recommended Topics">
            <Table>
                {topics?.length ? topics.map ((topic) => (
                    <TopicBox id={topic.id} key={topic.id} title={topic.title} labels={topic.labels} />
                )) : topics?.length === 0 ? (
                    <RenderEmptyTopics />
                ) : (
                    <RenderLoader />
                )}
            </Table>
        </GroupBox>
    )
}

export default Topics;