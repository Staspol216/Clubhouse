import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  width: 460px;
  margin: 100px auto;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 40px;
`;

export const Link = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #4f6fa5;
  cursor: pointer;
`;

export const BtnText = styled.span`
  display: inline-block;
  margin-right: 10px;
`;

export const Field = styled.input`
  min-width: 100px;
  height: 65px;
  background: #fff;
  border: 1px solid #e3e3e3;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0 25px;
  font-size: 20px;
`;

export const Loader = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.3rem solid black;
  border-top-color: #b1aa97;
  animation: 0.5s spin infinite linear;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  min-height: 200px;
  width: 100%;

  padding: 65px;

  background: #ffffff;
  border: 1px solid #e8e3d7;
  box-sizing: border-box;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;
