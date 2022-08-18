import Avatar from "components/Avatar";
import Button from "components/Button";
import Modal from "components/Modal";
import StepInfo from "components/StepInfo";
import Image from "next/image";
import * as SharedStyle from "styles/shared.tsx";
import * as Styled from "./styles";

export const EnterNameStep = () => {
  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <Modal>
        <Avatar width="120px" height="120px" />
        <Styled.NameInput placeholder="Enter fullname" />
        <Button width="160px">
          Next
          <Styled.BtnIcon>
            <Image width={14} height={11} src="/static/arrow.svg" alt="icon" />
          </Styled.BtnIcon>
        </Button>
      </Modal>
    </SharedStyle.ModalWrapper>
  );
};
