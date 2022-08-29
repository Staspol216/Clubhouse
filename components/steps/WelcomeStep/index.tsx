import Button from "components/Button";
import { MainContext } from "pages";
import { FC, useContext } from "react";
import * as SharedStyle from "styles/shared";
import * as Styled from "./styles";

export const WelcomeStep: FC = () => {
  const { onNextStep } = useContext(MainContext);

  return (
    <Styled.WelcomeModal>
      <SharedStyle.Modal>
        <Styled.Title>
          <Styled.HandWaveImage
            width={40}
            height={40}
            src="/static/hand-wave.png"
            alt="Celebration"
          />
          <Styled.Text>Welcome to de Clubhouse Body!</Styled.Text>
        </Styled.Title>
        <SharedStyle.Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe
          voluptatum quia vel repellat? Praesentium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.
        </SharedStyle.Paragraph>
        <Button onClick={onNextStep}>
          <span>Get your username</span>
          <Styled.BtnIcon width="16px" height="12px" src="/static/arrow.svg" />
        </Button>
        <Styled.SignInLink>Have an invite text? Sign in</Styled.SignInLink>
      </SharedStyle.Modal>
    </Styled.WelcomeModal>
  );
};
