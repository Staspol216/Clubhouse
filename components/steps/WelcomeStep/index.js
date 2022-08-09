import { HiArrowRight } from "react-icons/hi";
import { link } from "../../../styles/_display.tsx";
import Button from "../../Button";
import Modal from "../../Modal";
import { btnIcon, handWaveImage, signInLink, title } from "./style";


export const WelcomeStep = () => {
  return (
    <Modal css={{width: 650}}>
      <h3 css={title}>
        <img css={handWaveImage} src="/static/hand-wave.png" alt="Celebration" />
        Welcome to de Clubhouse Body!
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe
        voluptatum quia vel repellat? Praesentium? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.
      </p>
      <div>
        <Button css={{margin: "0 auto"}}>
          Get your username
          <HiArrowRight color="#fff" css={btnIcon} src="/static/arrow.svg" />
        </Button>
      </div>
      <div css={[link, signInLink]}>Have an invite text? Sign in</div>
    </Modal>
  );
};
