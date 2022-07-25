import { css } from "@emotion/react";

export const button = css`
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
  buttonGreen: css`
    background-color: ${colors.green};
    &:hover, &:active {
       background-color: darken(${colors.green}, 2%);
    }
  `,
  buttonGray: css`
    background-color: ${colors.gray};
    color: "#323232";
    &:hover, &:active {
      background-color: darken(${colors.gray}, 2%)
    }
  `,
};
