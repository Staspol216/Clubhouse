import React from "react";
import { loader } from "../../../styles/_display";
import { ModalBlock } from "../../ModalBlock";
import StepInfo from "../../StepInfo";
import * as style from "./style";

const EnterCodeStep = () => {

  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = React.useState(false);
    
  return (
    <div css={style.wrapper}>
      {!isLoading ? (
        <>
          <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
          <ModalBlock css={style.modal}>
            <div css={style.codeInput}>

            </div>
          </ModalBlock>
        </>
      ) : (
        <div css={{textAlign: "text-center" }}>
          <div css={loader}></div>
          <h3 css={{marginTop: 5}}>Activation in progress ...</h3>
        </div>
      )}
    </div>
  )
}

export default EnterCodeStep;