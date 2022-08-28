import { ChooseAvatarStep } from "components/steps/ChooseAvatarStep";
import { EnterCodeStep } from "components/steps/EnterCodeStep";
import { EnterNameStep } from "components/steps/EnterNameStep";
import { EnterPhoneStep } from "components/steps/EnterPhoneStep";
import { GitHubStep } from "components/steps/GitHubStep";
import { WelcomeStep } from "components/steps/WelcomeStep";
import { useState } from "react";

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};
export default function Home() {
  const [step, setStep] = useState<number>(5);
  const Step = stepsComponents[step];

  return (
    <div>
      <Step />
    </div>
  );
}
