import { FC, MouseEvent, ReactNode } from "react";
import * as Styled from "./style";

interface Props {
  disabled?: boolean;
  children?: ReactNode;
  color?: "gray" | "green";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  children,
  disabled,
  color,
  onClick,
  ...props
}) => {
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
