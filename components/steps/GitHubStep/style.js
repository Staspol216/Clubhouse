import styled from "@emotion/styled";
import { Link } from "../../../styles/shared";
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

export const InfoLink = styled(Link)`
  margin-top: 20px;
`;
