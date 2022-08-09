import * as Styled from "./styles";

const Modal = ({ children, className }) => {
  return <Styled.Modal className={className}>{children}</Styled.Modal>;
};

export default Modal;
