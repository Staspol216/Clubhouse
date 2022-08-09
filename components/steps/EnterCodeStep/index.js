import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Styled from "./style";

const EnterCodeStep = () => {

  let Condition = true;
  // eslint-disable-next-line no-unused-vars
  return (
    <Styled.Wrapper>
      {Condition ? (
        <>
          <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
          <Modal>
            <Styled.CodeInputWrapper>

            </Styled.CodeInputWrapper>
          </Modal>
        </>
      ) : (
        <div css={{textAlign: "text-center" }}>
          <div></div>
          <h3 css={{marginTop: 5}}>Activation in progress ...</h3>
        </div>
      )}
    </Styled.Wrapper>
  )
}

export default EnterCodeStep;