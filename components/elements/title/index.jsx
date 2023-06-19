const Title = (props) => {
    const { size, title } = props;
  
    let fontSize = "";
    if (size === "large") {
      fontSize = "text-xl";
    } else if (size === "medium") {
      fontSize = "text-base";
    } else if (size === "small") {
      fontSize = "text-sm";
    }
  
    return (
      <span className={`text-slate-700 font-semibold ${fontSize}`}>
        {title || "No Title Assigned!"}
      </span>
    );
  };
  
  export default Title;