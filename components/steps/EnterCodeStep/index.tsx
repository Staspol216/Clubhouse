import Button from "components/Button";
import StepInfo from "components/StepInfo";
import Axios from "core/axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import * as SharedStyle from "styles/shared";
import * as Styled from "./styles";

export const EnterCodeStep = () => {
  const router = useRouter();
  const [codes, setCodes] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nextDisabled = codes.some((v) => !v);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.getAttribute("id")) - 1;
    const value = e.target.value;

    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (e.target.nextSibling) {
      (e.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const onSubmit = async () => {
    setIsLoading(true);
    await Axios.get("/todos")
      .then(({ data }) => {
        console.log(data);
        router.push("/rooms");
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
  };
  console.log(codes);

  return (
    <SharedStyle.ModalWrapper>
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <SharedStyle.Loader />
          <h3 style={{ marginTop: 5 }}>Activation in progress...</h3>
        </div>
      ) : (
        <>
          <StepInfo
            icon="/static/numbers.png"
            title="Enter your activate code"
          />
          <SharedStyle.Modal>
            <Styled.CodeInputsWrapper>
              {codes.map((code, index) => (
                <Styled.CodeInput
                  key={index}
                  type="tel"
                  placeholder="X"
                  maxLength={1}
                  id={String(index + 1)}
                  onChange={handleChangeInput}
                  value={code}
                />
              ))}
            </Styled.CodeInputsWrapper>
            <Button onClick={onSubmit} disabled={nextDisabled}>
              <span>Next</span>
              <Image
                width={14}
                height={11}
                src="/static/arrow.svg"
                alt={"arrow-icon"}
              />
            </Button>
          </SharedStyle.Modal>
        </>
      )}
    </SharedStyle.ModalWrapper>
  );
};
