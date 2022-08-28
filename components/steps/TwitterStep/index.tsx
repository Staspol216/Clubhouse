import Button from "components/Button";
import Modal from "components/Modal";
import { btnIcon } from "./style";

export const TwitterStep = () => {
  return (
    <div>
      <Modal>
        <div>
          <b>AD</b>
        </div>
        <h2>Staspol216</h2>
        <Button>
          <img src="" />
          Import from Twitter
          <img css={btnIcon} />
        </Button>
        <div>Enter my info manually</div>
      </Modal>
    </div>
  );
};
