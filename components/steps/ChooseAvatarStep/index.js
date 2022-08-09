import React from "react";
import { link } from "../../../styles/_display";
import Avatar from "../../Avatar";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Styled from "./style";

const ChooseAvatarStep = () => {
  return (
    <Styled.Wrapper>
      <StepInfo
        icon="/static/celebration.png"
        title={"Okay, !"}
        description="How’s this photo?"
      />
      <Modal>
        <Avatar />
        <Styled.Label htmlFor="image" css={[link]}>
          Choose a different photo
        </Styled.Label>
        <input id="image" type="file" hidden />
        <Button>
          Next
          <Styled.ButtonIcon src="/static/arrow.svg" />
        </Button>
      </Modal>
    </Styled.Wrapper>
  )
}

export default ChooseAvatarStep;