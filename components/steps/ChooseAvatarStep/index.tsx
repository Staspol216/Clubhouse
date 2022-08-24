import Avatar from "components/Avatar";
import Button from "components/Button";
import Modal from "components/Modal";
import StepInfo from "components/StepInfo";
import React, { useEffect, useRef } from "react";
import * as SharedStyle from "styles/shared";
import * as Styled from "./style";

export const ChooseAvatarStep: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeImage = (e) => {
    console.log(e.target.files);
  };

  useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener("change", handleChangeImage);
    }
  });

  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/celebration.png"
        title={"Okay, !"}
        description="How’s this photo?"
      />
      <Modal>
        <Styled.AvatarWrapper>
          <Avatar width="120px" height="120px" src="/static/man.png" />
        </Styled.AvatarWrapper>
        <Styled.Label as="label" htmlFor="image">
          Choose a different photo
        </Styled.Label>
        <input ref={inputFileRef} id="image" type="file" hidden />
        <Button>
          Next
          <Styled.BtnIcon width={14} height={11} src="/static/arrow.svg" />
        </Button>
      </Modal>
    </SharedStyle.ModalWrapper>
  );
};
