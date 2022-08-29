import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  width?: string;
}

const colors = {
  green: "#20db5f",
  gray: "#f2f2f2",
};

const greenBtn = css`
  background-color: ${colors.green};
  &:hover,
  &:active {
    background-color: darken(${colors.green}, 2%);
  }
`;

const grayBtn = css`
  background-color: ${colors.gray};
  color: "#323232";
  &:hover,
  &:active {
    background-color: darken(${colors.gray}, 2%);
  }
`;

export const Button = styled.button<Props>`
  display: block;
  height: 48px;
  width: ${({ width }) => (width ? width : "fit-content")};
  border-radius: 30px;
  border: 0;
  padding: 0 30px;
  margin: 0 auto;
  font-size: 18px;
  cursor: pointer;
  &:disabled,
  &:disabled:hover {
    background-color: #cdcbc4;
    cursor: default;
  }
  ${({ color }) => {
    switch (color) {
      case "green":
        return greenBtn;
      case "gray":
        return grayBtn;
      default:
        return css`
          background-color: #5677ad;
          color: #fff;
          &:hover {
            background-color: lighten(#5677ad, 2%);
          }
          &:active {
            background-color: darken(#5677ad, 1%);
            transform: translateY(1px);
          }
        `;
    }
  }}

  span {
    display: inline-block;
    margin-right: 10px;
  }
`;
