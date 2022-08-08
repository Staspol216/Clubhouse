import React from "react";
import { link } from "../../../styles/_display";
import Avatar from "../../Avatar";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Style from "./style";

const ChooseAvatarStep = () => {
  return (
    <Style.Wrapper>
      <StepInfo
        icon="/static/celebration.png"
        title={"Okay, !"}
        description="How’s this photo?"
      />
      <Modal css={Style.modal}>
        <div css={Style.avatar}>
          <Avatar />
        </div>
        <div css={Style.iconLabel}>
          <label htmlFor="image" css={[link]}>
            Choose a different photo
          </label>
        </div>
        <input id="image" type="file" hidden />
        <Button>
          Next
          <img css={Style.buttonIcon} src="/static/arrow.svg" />
        </Button>
      </Modal>
    </Style.Wrapper>
  )
}

export default ChooseAvatarStep;