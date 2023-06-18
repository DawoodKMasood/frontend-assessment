const GroupBox = (props) => {

    const { children, title } = props;

    return (
        <div className="border rounded-[10px] overflow-hidden">
            <div className="border-b px-4 py-2 bg-slate-50">
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