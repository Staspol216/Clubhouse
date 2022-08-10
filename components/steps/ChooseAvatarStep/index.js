import React from "react";
import * as SharedStyle from "../../../styles/shared.tsx";
import Avatar from "../../Avatar";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Styled from "./style";

const ChooseAvatarStep = () => {
  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/celebration.png"
        title={"Okay, !"}
        description="How’s this photo?"
      />
      <Modal>
        <Avatar />
        <Styled.Label as="label" htmlFor="image">
          Choose a different photo
        </Styled.Label>
        <input id="image" type="file" hidden />
        <Button>
          Next
          <Styled.BtnIcon src="/static/arrow.svg" />
        </Button>
      </Modal>
    </SharedStyle.ModalWrapper>
  );
};

export default ChooseAvatarStep;
