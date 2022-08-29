import styled from "@emotion/styled";
import Button from "components/Button";

export const Body = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    opacity: 0.5;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const FollowButton = styled(Button)`
  width: 100px;
  height: 40px;
  font-size: 16px;
  padding: 0;
  font-weight: 700;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
`;

export const About = styled.p`
  font-size: 22px;
  line-height: 30px;
`;
