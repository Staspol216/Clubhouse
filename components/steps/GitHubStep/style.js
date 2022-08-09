import styled from "@emotion/styled";
import Button from "../../Button";

export const GHButton = styled(Button)`
  background-color: #24292e;

  &:hover {
    background-color: lighten(#24292e, 10);
  }
`;

export const Image = styled.img`
  display: inline-block;
  margin-left: 10;
`;

export const Link = styled.div`
  margin-top: 20px;
  cursor: pointer;
  display: inline-block;
`;
