import styled from "@emotion/styled";
import Image from "next/Image";

export const InputWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 20px;
    left: 53px;
  }
  input {
    width: 265px;
    padding: 17px 20px 17px 30px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    border-radius: 20px;
    margin-bottom: 40px;
  }
`;

export const PolicyText = styled.p`
  font-size: 14px !important;
  line-height: 22px !important;
  text-align: center;
  color: #817f7a;
  margin-bottom: 0;
`;

export const BtnIcon = styled(Image)`
  display: inline-block;
  margin-left: 10px;
`;