import Button from "../../Button";
import { ModalBlock } from "../../ModalBlock";
import * as Styled from "./style";

export const WelcomeStep = () => {
  return (
    <ModalBlock>
      <Styled.Title src="" alt="">
        <Styled.handWaveImage src="" alt="" />
        Welcome to de Clubhouse Body!
      </Styled.Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe
        voluptatum quia vel repellat? Praesentium? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. At, a.
      </p>
      <div>
        <Button>
          Get your username
          <Styled.handWaveImage src="" alt="" />
        </Button>
      </div>
      <div>Have an invite text? Sign in</div>
    </ModalBlock>
  );
};
