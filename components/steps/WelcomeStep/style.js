import styled from "@emotion/styled";
import { HiArrowRight } from "react-icons/hi";
import Modal from "../../Modal";

export const WelcomeModal = styled(Modal)`
  width: 650px;
  margin: 100px auto;
  text-align: center;
  p {
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 40px;
  }
`;

export const HandWaveImage = styled.img`
  animation-name: wave-animation;
  animation-duration: 3s;
  animation-iteration-count: 1;
  transform-origin: 70% 70%;
  display: inline-block;
  width: 3rem;
  height: 2.5rem;
  margin-right: 5px;
  margin-bottom: 3px;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

export const BtnIcon = styled(HiArrowRight)`
  display: inline-block;
  margin-left: 10px;
`;

export const SignInLink = styled.div`
  margin-top: 15px;
  cursor: pointer;
  display: inline-block;
`;
