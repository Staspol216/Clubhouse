import NumberFormat from "react-number-format";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as style from "./style";

export const EnterPhoneStep = () => {
  return (
    <div сss={style.wrapper}>
      <StepInfo 
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code" 
      />
      <Modal css={style.block}>
        <div css={style.input}>
          <img src="/static/russian-flag.png" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-22-11"
          />
        </div>
        <Button>
          Next
          <img css={{display: "inline-block", marginLeft: "10px"}} src="/static/arrow.svg" />
        </Button>
        <p css={style.policyText}>
          By entering your number, you’re agreeing to our Terms of Service and Privacy Policy.
          Thanks!
        </p>
      </Modal>
    </div>
  )
}