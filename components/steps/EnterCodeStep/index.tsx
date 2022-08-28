import Modal from "components/Modal";
import StepInfo from "components/StepInfo";
import { useState } from "react";
import * as SharedStyle from "styles/shared";

export const EnterCodeStep = () => {
  const [codes, setCodes] = useState([]);

  const nextDisabled = codes.some((v) => !v) || codes.length < 4;

  const handleChangeInput = (e) => {
    const id = Number(e.target.getAttribute("id")) - 1;
    const value = e.target.value;

    setCodes((prev) => {
      const newArr = [...prev];
      newArr[id] = value;
      return newArr;
    });
    if (e.target.nextSiblings) {
      e.target.nextSiblings.focus();
    }
  };

  console.log(codes);

  return (
    <SharedStyle.ModalWrapper>
      <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
      <Modal>
        <input className="field"></input>
      </Modal>
    </SharedStyle.ModalWrapper>
  );
};
