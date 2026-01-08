const Button = ({
    onClick,
    button_icon,
    button_name,
    bgColor,
    textColor,
    paddingX,
    paddingY,
  }) => {
    const bgClass = bgColor ? `${bgColor}` : "bg-dark-orange";
    const textClass = textColor ? `${textColor}` : "text-black";
    const paddingXClass = paddingX ? `${paddingX}` : "px-3";
    const paddingYClass = paddingY ? `${paddingY}` : "py-3";
    return (
      <div>
        <p
          onClick={onClick}
          className={` cursor-pointer  w-fit  text-sm flex items-center rounded-lg  gap-2
        ${bgClass} ${textClass} ${paddingXClass} ${paddingYClass} `}
        >
          {button_icon}
          {button_name}
        </p>
      </div>
    );
  };
  
  export default Button;