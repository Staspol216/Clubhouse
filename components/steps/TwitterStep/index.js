import { link } from "../../../styles/_display.tsx";
import Button from "../../Button";
import { ModalBlock } from "../../ModalBlock";
import { btnIcon, enterLink } from "./style";


export const TwitterStep = () => {
  return (
    <div>
      <ModalBlock>
        <div>
          <b>
            AD
          </b>

        </div>
        <h2 css={{marginBottom: "40px"}}>Staspol216</h2>
        <Button>
          <img src="" />
            Import from Twitter
          <img css={btnIcon} />
        </Button>
        <div css={[link, enterLink]}>Enter my info manually</div>
      </ModalBlock>
    </div>
  )
}