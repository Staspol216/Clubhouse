import { buttonColorScheme, StyledButton } from "./style";

const Button = ({ children, disabled, color, onClick }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      css={buttonColorScheme[color]}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
