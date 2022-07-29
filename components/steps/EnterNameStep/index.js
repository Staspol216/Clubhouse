import { field } from "../../../styles/_display";
import Avatar from "../../Avatar";
import Button from "../../Button";
import { ModalBlock } from "../../ModalBlock";
import StepInfo from "../../StepInfo";

const EnterNameStep = () => {

  return (
    <div>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <ModalBlock css={{width: 460}}>
        <Avatar css={{width: 120, heigth: 120}}/>
        <div css={{ marginTop: 30, marginBottom: 30}}>
          <input
            css={field}
            placeholder="Enter fullname"
          />  
        </div>
        <Button>
          Next
          <img css={{display: "inline-block", marginLeft: 10}} src="/static/arrow.svg" />
        </Button>
      </ModalBlock>
    </div>
  )
}

export default EnterNameStep;