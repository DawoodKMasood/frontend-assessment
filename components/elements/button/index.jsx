const Button = (props) => {
    const { buttonType, classes, type, onClick, children } = props;
  
    let buttonClasses = `flex gap-2 justify-center items-center px-4 py-2 text-sm rounded-[5px] transition-all ${classes}`;
  
    if (type === 'primary') {
      buttonClasses += ' bg-orange-500 text-white hover:bg-orange-600';
    } else if (type === 'secondary') {
      buttonClasses += ' border border-slate-500 text-slate-500';
    } else if (type === 'error') {
      buttonClasses += ' bg-white border border-red-500 text-red-500 hover:text-red-600';
    }
  
    return (
      <button className={buttonClasses} type={buttonType || 'button'} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;