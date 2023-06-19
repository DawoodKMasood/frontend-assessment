const Button = (props) => {

    const { buttonType, type, onClick, children} = props;

    return (
        <button className={`flex gap-2 justify-center items-center ${type === 'primary' && ' bg-orange-500 text-white hover:bg-orange-600'} ${type === 'error' && 'bg-white border border-red-500 text-red-500 hover:text-red-600'} px-4 py-2 text-sm rounded-[5px] transition-all`} type={buttonType || "button"} onClick={onClick}>
            { children }
        </button>
    )
}

export default Button;