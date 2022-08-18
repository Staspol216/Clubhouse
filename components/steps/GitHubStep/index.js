import Modal from "components/Modal";
import StepInfo from "components/StepInfo";
import Image from "next/image";
import React from "react";
import * as SharedStyle from "styles/shared";
import * as Styled from "./style";

export const GitHubStep = () => {
  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/connect.png"
        title="Do you want import info from GitHub?"
      />
      <Modal>
        <Styled.GHButton>
          <Styled.GithubIcon>
            <Image width={16} height={16} src="/static/github.svg" />
          </Styled.GithubIcon>
          Import from GitHub
          <Styled.ArrowIcon>
            <Image width={16} height={16} src="/static/arrow.svg" />
          </Styled.ArrowIcon>
        </Styled.GHButton>
        <Styled.InfoLink>Enter my info manually</Styled.InfoLink>
      </Modal>
    </SharedStyle.ModalWrapper>
  );
};
