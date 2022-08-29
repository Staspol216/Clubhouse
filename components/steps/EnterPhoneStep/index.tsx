import Button from "components/Button";
import StepInfo from "components/StepInfo";
import Image from "next/image";
import { MainContext } from "pages";
import { useContext, useState } from "react";
import NumberFormat from "react-number-format";
import * as SharedStyle from "styles/shared";
import * as Styled from "./styles";

interface InputValueStep {
  formattedValue: string;
  value: string;
}

export const EnterPhoneStep = () => {
  const { onNextStep } = useContext(MainContext);
  const [values, setValues] = useState<InputValueStep>({} as InputValueStep);

  const nextDisabled =
    !values.formattedValue || values.formattedValue.includes("_");

  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <SharedStyle.Modal>
        <Styled.InputWrapper>
          <Styled.FlagIcon>
            <Image
              src="/static/russian-flag.png"
              alt="flag"
              width={24}
              height={24}
            />
          </Styled.FlagIcon>
          <NumberFormat
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-22-11"
            value={values.value}
            onValueChange={({ formattedValue, value }) =>
              setValues({ formattedValue, value })
            }
          />
        </Styled.InputWrapper>
        <Button onClick={onNextStep} disabled={nextDisabled}>
          <span>Next</span>
          <Image
            width={14}
            height={11}
            src="/static/arrow.svg"
            alt={"arrow-icon"}
          />
        </Button>
        <Styled.PolicyText>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </Styled.PolicyText>
      </SharedStyle.Modal>
    </SharedStyle.ModalWrapper>
  );
};
