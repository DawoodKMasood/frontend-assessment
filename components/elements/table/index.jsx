const Table = (props) => {

    const { children } = props;

    return (
        <div className="flex flex-col divide-y">
            { children }
        </div>
    )
}

export default Table;