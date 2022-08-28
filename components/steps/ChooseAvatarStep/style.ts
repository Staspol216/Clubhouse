import styled from "@emotion/styled";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { Link } from "../../../styles/shared";

export const BtnIcon = styled(Image)`
  display: inline-block;
  margin-left: 10px;
`;

export const Label = styled(Link)<ComponentPropsWithoutRef<"label">>`
  margin-bottom: 30px;
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 20px;
`;
