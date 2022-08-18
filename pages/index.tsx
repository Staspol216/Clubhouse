import { ChooseAvatarStep } from "components/steps/ChooseAvatarStep";
import { EnterNameStep } from "components/steps/EnterNameStep";
import { GitHubStep } from "components/steps/GitHubStep";
import { WelcomeStep } from "components/steps/WelcomeStep";
import { useState } from "react";

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
};

export default function Home() {
  const [step, setStep] = useState<number>(3);
  const Step = stepsComponents[step];

  return (
    <div>
      <Step />
    </div>
  );
}
