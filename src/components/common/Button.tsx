type ButtonProps = {
  type?: "button" | "submit";
  color?: string;
  style?: string;
  text: string;
  clickEvent?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  color = "bg-customBlueColor",
  style,
  text,
  clickEvent,
}) => {
  return (
    <button
      type={type}
      className={`${color} block text-white font-bold rounded mx-auto ${style}`} // color prop 적용
      onClick={clickEvent}
    >
      {text}
    </button>
  );
};

export default Button;
