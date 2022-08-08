import React from "react";
import { link } from "../../../styles/_display.tsx";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as style from "./style";

const GitHubStep = () => {
  return (
    <div css={style.wrapper}>
      <StepInfo icon="/static/connect.png" title="Do you want import info from GitHub?" />
      <Modal css={style.block}>
        <Button css={style.button}>
          <img css={style.image} src="/static/github.svg" />
            Import from GitHub
          <img css={style.image} src="/static/arrow.svg" />
        </Button>
        <div css={[link, style.link]}>Enter my info manually</div>
      </Modal>
    </div>
  )
}

export default GitHubStep;