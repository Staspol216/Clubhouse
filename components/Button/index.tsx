import { FC, MouseEvent, ReactNode } from "react";
import * as Styled from "./style";

interface Props {
  disabled?: boolean;
  children?: ReactNode;
  width?: string;
  color?: "gray" | "green" | "blue";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  children,
  disabled,
  color,
  width,
  onClick,
  ...props
}) => {
  return (
    <Styled.Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      width={width}
      {...props}
      color={color}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
