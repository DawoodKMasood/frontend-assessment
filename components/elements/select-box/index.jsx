const SelectBox = (props) => {

    const { name, options } = props;

    return (
        <select name={name} className="p-2 border rounded-[5px]">
            <option selected disabled>
                Select a Tone
            </option>
            {options?.length ? options?.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.title}
                </option>
            )) : (
                <option diabled>
                    No Option Found
                </option>
            )}
        </select>
    )
}

export default SelectBox;