import * as SharedStyle from "../../../styles/shared.tsx";
import Avatar from "../../Avatar";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
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
        <Styled.NameInput className="field" placeholder="Enter fullname" />
        <Button width="160px">
          <SharedStyle.BtnText>Next</SharedStyle.BtnText>
          <Styled.BtnIcon width={14} height={11} src="/static/arrow.svg" alt="icon" />
        </Button>
      </Modal>
    </SharedStyle.ModalWrapper>
  );
};
