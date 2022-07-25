import { button, buttonColorScheme } from "./style";

const Button = ({ children, disabled, color, onClick, ...props}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      css={[buttonColorScheme[color], button]}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
