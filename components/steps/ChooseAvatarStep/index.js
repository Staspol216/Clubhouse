import React from "react";
import { link } from "../../../styles/_display";
import Avatar from "../../Avatar";
import Button from "../../Button";
import { ModalBlock } from "../../ModalBlock";
import StepInfo from "../../StepInfo";
import * as style from "./style";

const ChooseAvatarStep = () => {
  return (
    <div css={style.wrapper}>
      <StepInfo
        icon="/static/celebration.png"
        title={"Okay, !"}
        description="How’s this photo?"
      />
      <ModalBlock css={style.modal}>
        <div css={style.avatar}>
          <Avatar />
        </div>
        <div css={{marginBottom: 30}}>
          <label htmlFor="image" css={[link]}>
            Choose a different photo
          </label>
        </div>
        <input id="image" type="file" hidden />
        <Button>
          Next
          <img css={{display: "inline-block", marginLeft: 10}} src="/static/arrow.svg" />
        </Button>
      </ModalBlock>
    </div>
  )
}

export default ChooseAvatarStep;