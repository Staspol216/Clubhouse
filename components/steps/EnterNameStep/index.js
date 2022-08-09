import { ModalWrapper } from "../../../styles/shared";
import Avatar from "../../Avatar";
import Button from "../../Button";
import Modal from "../../Modal";
import StepInfo from "../../StepInfo";
import * as Styled from "./style";

const EnterNameStep = () => {
  return (
    <ModalWrapper>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <Modal>
        <Avatar width={120} height={120} />
        <div>
          <input className="field" placeholder="Enter fullname" />
        </div>
        <Button>
          Next
          <Styled.Image src="/static/arrow.svg" />
        </Button>
      </Modal>
    </ModalWrapper>
  );
};

export default EnterNameStep;
