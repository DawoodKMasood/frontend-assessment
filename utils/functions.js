const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const isString = (o) => {
  return typeof o == "string" || (typeof o == "object" && o.constructor === String);
}

const isNumber = (o) => {
  return typeof o == "number" || (typeof o == "object" && o.constructor === Number);
}

export {
    generateRandomColor,
    isString,
    isNumber,
}