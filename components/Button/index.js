import * as Styled from "./style";

const Button = ({ children, disabled, color, onClick, ...props}) => {
  return (
    <Styled.Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
      color={color}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
