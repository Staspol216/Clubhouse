import Button from "components/Button";
import StepInfo from "components/StepInfo";
import Image from "next/image";
import { MainContext } from "pages";
import { ChangeEvent, FC, useContext, useState } from "react";
import * as SharedStyle from "styles/shared";
import * as Styled from "./styles";

export const EnterNameStep: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { onNextStep } = useContext(MainContext);

  const nextDisabled = !inputValue;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickNextStep = () => {
    onNextStep();
  };

  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <SharedStyle.Modal>
        <Styled.NameInput
          onChange={handleChangeInput}
          value={inputValue}
          placeholder="Enter fullname"
        />
        <Button disabled={nextDisabled} onClick={onClickNextStep}>
          <span>Next</span>
          <Image width={14} height={11} src="/static/arrow.svg" alt="icon" />
        </Button>
      </SharedStyle.Modal>
    </SharedStyle.ModalWrapper>
  );
};
