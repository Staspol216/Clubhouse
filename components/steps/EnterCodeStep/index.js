import Modal from "components/Modal";
import StepInfo from "components/StepInfo";
import * as SharedStyle from "styles/shared.tsx";

export const EnterCodeStep = () => {
  let Condition = true;
  // eslint-disable-next-line no-unused-vars
  return (
    <SharedStyle.ModalWrapper>
      {Condition ? (
        <>
          <StepInfo
            icon="/static/numbers.png"
            title="Enter your activate code"
          />
          <Modal>
            <input className="field"></input>
          </Modal>
        </>
      ) : (
        <div css={{ textAlign: "text-center" }}>
          <div></div>
          <h3 css={{ marginTop: 5 }}>Activation in progress ...</h3>
        </div>
      )}
    </SharedStyle.ModalWrapper>
  );
};

