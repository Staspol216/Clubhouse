import Image from "next/Image";
import * as Styled from "./style";

const StepInfo = ({ title, description, icon }) => {
  return (
    <Styled.Wrapper>
      <Image width={48} height={48} src={icon} alt="Step picture" />
      <Styled.Title>{title}</Styled.Title>
      {description && <Styled.Description>{description}</Styled.Description>}
    </Styled.Wrapper>
  );
};

export default StepInfo;
  