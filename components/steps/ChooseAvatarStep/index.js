import React from "react";
import { ModalWrapper } from "../../../styles/shared";
import Avatar from "../../Avatar";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Styled from "./style";

const ChooseAvatarStep = () => {
  return (
    <ModalWrapper>
      <StepInfo
        icon="/static/celebration.png"
        title={"Okay, !"}
        description="How’s this photo?"
      />
      <Modal>
        <Avatar />
        <Styled.Label className="link" htmlFor="image">
          Choose a different photo
        </Styled.Label>
        <input id="image" type="file" hidden />
        <Button>
          Next
          <Styled.ButtonIcon src="/static/arrow.svg" />
        </Button>
      </Modal>
    </ModalWrapper>
  );
};

export default ChooseAvatarStep;
