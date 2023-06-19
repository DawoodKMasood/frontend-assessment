const Input = (props) => {
    const { onKeyDown, onChange, value, classes, placeholder, type } = props;
  
    return (
      <input
        className={`${classes} w-full text-sm border focus:outline-none focus:ring-0 rounded-[5px] px-3 py-2`}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    );
  };
  
  export default Input;