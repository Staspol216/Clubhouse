import styled from "@emotion/styled";
import Image from "next/image";
import { Link, ModalWrapper } from "styles/shared";

export const WelcomeModal = styled(ModalWrapper)`
  width: 650px;
`;

export const HandWaveImage = styled(Image)`
  animation-name: wave-animation;
  animation-duration: 3s;
  animation-iteration-count: 1;
  transform-origin: 70% 70%;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.span`
  display: block;
  margin-left: 5px;
  font-size: 22px;
`;
export const BtnIcon = styled(Image)`
  display: inline-block;
  margin-left: 10px;
`;

export const SignInLink = styled(Link)`
  margin-top: 15px;
`;
