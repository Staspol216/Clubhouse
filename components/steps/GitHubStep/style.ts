import styled from "@emotion/styled";
import Button from "components/Button";
import { Link } from "styles/shared";

export const GHButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #24292e;

  &:hover {
    background-color: lighten(#24292e, 10);
  }
`;

export const GithubIcon = styled.div`

  margin-right: 10px;
`;

export const ArrowIcon = styled.div`

  margin-left: 10px;
`;

export const InfoLink = styled(Link)`
  margin-top: 20px;
`;
