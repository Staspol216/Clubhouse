import Button from "../../Button";
import * as Styled from "./style";

export const WelcomeStep = () => {
  return (
    <Styled.WelcomeModal>
      <Styled.Title>
        <Styled.HandWaveImage src="/static/hand-wave.png" alt="Celebration" />
        Welcome to de Clubhouse Body!
      </Styled.Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe
        voluptatum quia vel repellat? Praesentium? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.
      </p>
      <div>
        <Button>
          Get your username
          <Styled.BtnIcon src="/static/arrow.svg" />
        </Button>
      </div>
      <Styled.SignInLink className="link">
        Have an invite text? Sign in
      </Styled.SignInLink>
    </Styled.WelcomeModal>
  );
};
