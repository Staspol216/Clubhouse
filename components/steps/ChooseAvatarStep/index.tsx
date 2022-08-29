import Avatar from "components/Avatar";
import Button from "components/Button";
import StepInfo from "components/StepInfo";
import { MainContext } from "pages";
import { ChangeEvent, FC, useContext, useState } from "react";
import * as SharedStyle from "styles/shared";
import * as Styled from "./style";

export const ChooseAvatarStep: FC = () => {
  const { onNextStep } = useContext(MainContext);
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>): void => {
    const [file] = e.target.files;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  return (
    <SharedStyle.ModalWrapper>
      <StepInfo
        icon="/static/celebration.png"
        title={"Okay, !"}
        description="How`s this photo?"
      />
      <SharedStyle.Modal>
        <Styled.AvatarWrapper>
          <Avatar width="120px" height="120px" src={avatarUrl} />
        </Styled.AvatarWrapper>
        <Styled.Label as="label" htmlFor="image">
          Choose a different photo
        </Styled.Label>
        <input onChange={handleChangeImage} id="image" type="file" hidden />
        <Button onClick={onNextStep}>
          <span>Next</span>
          <Styled.BtnIcon width={14} height={11} src="/static/arrow.svg" />
        </Button>
      </SharedStyle.Modal>
    </SharedStyle.ModalWrapper>
  );
};
