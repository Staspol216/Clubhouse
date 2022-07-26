import { ChooseAvatarStep } from "components/steps/ChooseAvatarStep";
import { EnterCodeStep } from "components/steps/EnterCodeStep";
import { EnterNameStep } from "components/steps/EnterNameStep";
import { EnterPhoneStep } from "components/steps/EnterPhoneStep";
import { GitHubStep } from "components/steps/GitHubStep";
import { WelcomeStep } from "components/steps/WelcomeStep";
import { createContext, useState } from "react";

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

export type UserData = {
  id: number;
  fullname: string;
  avatarUrl: string;
  isActive: number;
  username: string;
  phone: string;
  token?: string;
};

interface MainContextProps {
  onNextStep: () => void;
  step: number;
}

export const MainContext = createContext<MainContextProps>(
  {} as MainContextProps
);

export default function Home() {
  const [step, setStep] = useState<number>(0);
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
}
