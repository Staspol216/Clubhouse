import Image from "next/Image";
import NumberFormat from "react-number-format";
import * as SharedStyle from "../../../styles/shared.tsx";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Styled from "./styles";

export const EnterPhoneStep = () => {
  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <Modal>
        <Styled.InputWrapper>
          <Image src="/static/russian-flag.png" alt="flag" width={24} height={24} />
          <NumberFormat
            className="field"
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-22-11"
          />
        </Styled.InputWrapper>
        <Button>
          <Styled.BtnText>Next</Styled.BtnText>
          <Image width={14} height={11} src="/static/arrow.svg" alt={"arrow-icon"} />
        </Button>
        <Styled.PolicyText>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </Styled.PolicyText>
      </Modal>
    </SharedStyle.ModalWrapper>
  );
};
