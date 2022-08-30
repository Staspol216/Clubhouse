import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import * as Styled from "./styles";

type BackButtonProps = {
  title: string;
  href: string;
};

export const BackButton: FC<BackButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <Styled.BackButton>
        <Image width={20} height={20} src="/static/back-arrow.svg" alt="Back" />
        <h3>{title}</h3>
      </Styled.BackButton>
    </Link>
  );
};
