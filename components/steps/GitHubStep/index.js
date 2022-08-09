import React from "react";
import { ModalWrapper } from "../../../styles/shared";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Styled from "./style";

const GitHubStep = () => {
  return (
    <ModalWrapper>
      <StepInfo
        icon="/static/connect.png"
        title="Do you want import info from GitHub?"
      />
      <Modal>
        <Styled.GHButton>
          <Styled.Image src="/static/github.svg" />
          Import from GitHub
          <Styled.Image src="/static/arrow.svg" />
        </Styled.GHButton>
        <Styled.Link className="link">Enter my info manually</Styled.Link>
      </Modal>
    </ModalWrapper>
  );
};

export default GitHubStep;
