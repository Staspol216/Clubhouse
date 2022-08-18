import Button from "components/Button";
import * as SharedStyle from "styles/shared.tsx";
import * as Styled from "./styles";

export const WelcomeStep = () => {
  return (
    <Styled.WelcomeModal>
      <Styled.Title>
        <Styled.HandWaveImage width={40} height={40} src="/static/hand-wave.png" alt="Celebration" />
        <Styled.Text>Welcome to de Clubhouse Body!</Styled.Text>
      </Styled.Title>
      <SharedStyle.Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe
        voluptatum quia vel repellat? Praesentium? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.
      </SharedStyle.Paragraph>
      <Button>
          Get your username
        <Styled.BtnIcon width={"3rem"} height={"2.5rem"} src="/static/arrow.svg" alt="icon" />
      </Button>
      <Styled.SignInLink>
        Have an invite text? Sign in
      </Styled.SignInLink>
    </Styled.WelcomeModal>
  );
};
