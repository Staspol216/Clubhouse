import StepInfo from "components/StepInfo";
import Image from "next/image";
import { MainContext } from "pages";
import { useContext } from "react";
import * as SharedStyle from "styles/shared";
import * as Styled from "./style";

export const GitHubStep = () => {
  const { onNextStep } = useContext(MainContext);

  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/connect.png"
        title="Do you want import info from GitHub?"
      />
      <SharedStyle.Modal>
        <Styled.GHButton onClick={onNextStep}>
          <Styled.GithubIcon>
            <Image width={16} height={16} src="/static/github.svg" />
          </Styled.GithubIcon>
          Import from GitHub
          <Styled.ArrowIcon>
            <Image width={16} height={16} src="/static/arrow.svg" />
          </Styled.ArrowIcon>
        </Styled.GHButton>
        <Styled.InfoLink>Enter my info manually</Styled.InfoLink>
      </SharedStyle.Modal>
    </SharedStyle.ModalWrapper>
  );
};
