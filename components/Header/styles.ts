import styled from "@emotion/styled";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #eae6da;
  padding: 10px 10px 13px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1240px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  b {
    margin-right: 15px;
  }
`;

export const Logo = styled(Image)`
  margin-right: 5px;

  h4 {
    font-size: 20px;
    margin: 0;
  }
`;
