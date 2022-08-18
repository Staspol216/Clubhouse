import Avatar from "components/Avatar";
import Button from "components/Button";
import Modal from "components/Modal";
import StepInfo from "components/StepInfo";
import React from "react";
import * as SharedStyle from "styles/shared.tsx";
import * as Styled from "./style";

export const ChooseAvatarStep = () => {
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
          <Styled.BtnIcon width={14} height={11} src="/static/arrow.svg" />
        </Button>
      </Modal>
    </SharedStyle.ModalWrapper>
  );
};
