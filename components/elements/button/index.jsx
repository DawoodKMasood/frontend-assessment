const Button = (props) => {

    const { type, children} = props;

    return (
        <button className={`flex gap-2 items-center ${type === 'primary' && ' bg-orange-500 text-white hover:bg-orange-600'} ${type === 'error' && 'bg-white border border-red-500 text-red-500 hover:text-red-600'} px-4 py-2 text-sm rounded transition-all`}>
            { children }
        </button>
    )
}

export default Button;