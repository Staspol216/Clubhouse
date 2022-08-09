import NumberFormat from "react-number-format";
import { ModalWrapper } from "../../../styles/shared";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Styled from "./style";

export const EnterPhoneStep = () => {
  return (
    <ModalWrapper>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <Modal>
        <Styled.InputWrapper>
          <img src="/static/russian-flag.png" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-22-11"
          />
        </Styled.InputWrapper>
        <Button>
          Next
          <Styled.Image src="/static/arrow.svg" />
        </Button>
        <Styled.PolicyText>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </Styled.PolicyText>
      </Modal>
    </ModalWrapper>
  );
};
