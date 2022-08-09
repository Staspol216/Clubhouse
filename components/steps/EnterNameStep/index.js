import { field } from "../../../styles/_display";
import Avatar from "../../Avatar";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";

const EnterNameStep = () => {

  return (
    <div>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <Modal>
        <Avatar width={120} height={120}/>
        <div>
          <input
            css={field}
            placeholder="Enter fullname"
          />  
        </div>
        <Button>
          Next
          <img css={{display: "inline-block", marginLeft: 10}} src="/static/arrow.svg" />
        </Button>
      </Modal>
    </div>
  )
}

export default EnterNameStep;