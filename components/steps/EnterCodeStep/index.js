import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as style from "./style";

const EnterCodeStep = () => {

  let Condition = true;
  // eslint-disable-next-line no-unused-vars
  return (
    <div css={style.wrapper}>
      {Condition ? (
        <>
          <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
          <Modal css={style.modal}>
            <div css={style.codeInput}>

            </div>
          </Modal>
        </>
      ) : (
        <div css={{textAlign: "text-center" }}>
          <div></div>
          <h3 css={{marginTop: 5}}>Activation in progress ...</h3>
        </div>
      )}
    </div>
  )
}

export default EnterCodeStep;