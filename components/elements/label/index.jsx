import hexToRgba from 'hex-to-rgba';

const Label = (props) => {

    const { colour, title } = props;

    return  (
        <span className="border rounded-[6px] px-2 text-sm" style={{
            backgroundColor: hexToRgba(colour, 0.1) || "#fff",
            color: colour || "#000",
            borderColor: colour || "#fff",
        }}>
            {title || "N/A"}
        </span>
    )
}

export default Label;