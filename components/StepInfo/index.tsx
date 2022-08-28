import Image from "next/image";
import { FC } from "react";
import * as Styled from "./style";

interface Props {
  title: string;
  description?: string;
  icon: string;
}

const StepInfo: FC<Props> = ({ title, description, icon }) => {
  return (
    <Styled.Wrapper>
      <Image width={48} height={48} src={icon} alt="Step picture" />
      <Styled.Title>{title}</Styled.Title>
      {description && <Styled.Description>{description}</Styled.Description>}
    </Styled.Wrapper>
  );
};

export default StepInfo;
