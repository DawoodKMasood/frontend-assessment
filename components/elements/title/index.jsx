const Title = (props) => {

    const { size, title } = props;

    return (
        <span className={`${size === 'large' && 'text-xl' || size === 'medium' && 'text-base' || size === 'small' && 'text-sm'} text-slate-700 font-semibold`}>
            {title || 'No Title Assigned!'}
        </span>
    )
}

export default Title;