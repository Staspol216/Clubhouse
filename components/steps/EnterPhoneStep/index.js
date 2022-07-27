import * as style from ".style"
import { Button } from "../../Button"
import { ModalBlock } from "../../ModalBlock"
import StepInfo from "../../StepInfo"

const EnterPhoneStep = () => {
  return (
    <div сss={style.wrapper}>
      <StepInfo 
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code" 
      />
      <ModalBlock>
        <div css={style.input}>
          <img src="/static/russian-flag.png" alt="flag" width={24} />
        </div>
        <Button>
          <>
                Next
            <img css={{display: "inline-block", marginLeft: "10px"}} src="/static/arrow.svg" />
          </>
        </Button>
        <p css={style.policyText}>
          By entering your number, you’re agreeing to our Terms of Service and Privacy Policy.
          Thanks!
        </p>
      </ModalBlock>
    </div>
  )
}

export default EnterPhoneStep