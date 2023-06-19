const Button = (props) => {

    const { buttonType, classes, type, onClick, children} = props;

    return (
        <button className={`${classes} flex gap-2 justify-center items-center ${type === 'primary' && ' bg-orange-500 text-white hover:bg-orange-600'} ${type === 'secondary' && ' border border-slate-500 text-slate-500'} ${type === 'error' && 'bg-white border border-red-500 text-red-500 hover:text-red-600'} px-4 py-2 text-sm rounded-[5px] transition-all`} type={buttonType || "button"} onClick={onClick}>
            { children }
        </button>
    )
}

export default Button;