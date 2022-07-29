import React from "react";
import Button from "../../Button";
import { ModalBlock } from "../../ModalBlock";
import StepInfo from "../../StepInfo";
import * as style from "./style";

const GitHubStep = () => {
  return (
    <div css={style.wrapper}>
      <StepInfo icon="/static/connect.png" title="Do you want import info from GitHub?" />
      <ModalBlock css={style.block}>
        <Button css={style.button}>
          <img css={style.image} src="/static/github.svg" />
            Import from GitHub
          <img css={style.image} src="/static/arrow.svg" />
        </Button>
        {/* <div className="link mt-20 cup d-ib">Enter my info manually</div> */}
      </ModalBlock>
    </div>
  )
}

export default GitHubStep;