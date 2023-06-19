const GroupBox = (props) => {

    const { children, title } = props;

    return (
        <div className="relative border rounded-[10px] overflow-auto">
            <div className="sticky top-0 left-0 right-0 border-b px-4 py-2 bg-slate-50 overflow-hidden">
                <span className="font-semibold text-slate-500">
                    {title}
                </span>
            </div>
            <div>
                { children }
            </div>
        </div>
    )
}

export default GroupBox;