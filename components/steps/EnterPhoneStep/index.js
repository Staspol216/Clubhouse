import Button from "components/Button";
import Modal from "components/Modal";
import StepInfo from "components/StepInfo";
import Image from "next/image";
import NumberFormat from "react-number-format";
import * as SharedStyle from "styles/shared.tsx";
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
          <Styled.FlagIcon>
            <Image src="/static/russian-flag.png" alt="flag" width={24} height={24} />
          </Styled.FlagIcon>
          <NumberFormat
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
