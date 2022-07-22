import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledButton = styled.button`
  height: 48px;
  background: #5677ad;
  border-radius: 30px;
  color: #fff;
  border: 0;
  padding: 0 30px;
  font-size: 18px;
  cursor: pointer;
  &:disabled,
  &:disabled:hover {
    background-color: #cdcbc4;
    cursor: default;
  }
  &:hover {
    background-color: lighten(#5677ad, 2%);
  }
  &:active {
    background-color: darken(#5677ad, 1%);
    transform: translateY(1px);
  }
`;
const colors = {
  green: "#20db5f",
  gray: "#f2f2f2",
};

export const buttonColorScheme = {
  buttonGreen: css({
    backgroundColor: colors.green,
    "&:hover, &:active": {
      backgroundColor: `darken(${colors.green}, 2%)`,
    },
  }),
  buttonGray: css({
    backgroundColor: colors.gray,
    color: "#323232",
    "&:hover, &:active": {
      backgroundColor: `darken(${colors.gray}, 2%)`,
    },
  }),
};
