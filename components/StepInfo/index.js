import * as Styled from "./style";

const StepInfo = ({ title, description, icon }) => {
  return (
    <div>
      <div>
        <Styled.Image src={icon} alt="Step picture" />
      </div>
      <Styled.Title>{title}</Styled.Title>
      {description && <Styled.Description>{description}</Styled.Description>}
    </div>
  );
};

export default StepInfo;
  