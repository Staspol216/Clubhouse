import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface Props {
  src: string;
  width: string;
  height: string;
  isVoice?: boolean;
}

const emptyAvatar = css`
  justify-content: center;
  align-items: center;
  display: inline-flex;
  background-color: #e0e0e0;
  font-size: 30px;
  font-weight: 700;
`;

const voicedAvatarBorder = css`
  border: 5px solid #fff;
  box-shadow: 0 0 0 4px #e5e0d0;
`;

export const Avatar = styled.div<Props>`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  background-size: cover;
  border: 5px solid #fff;
  box-shadow: 0 0 0 4px #e5e0d0;
  background-image: ${({ src }) =>
    src ? `url(${src})` : "url(/static/avatar-placeholder.png)"};
  width: ${({ width }) => (width ? width : "45px")};
  height: ${({ height }) => (height ? height : "45px")};
  ${({ isVoice }) => (isVoice ? voicedAvatarBorder : "")};
  ${({ src }) => (src ? "" : emptyAvatar)};
`;
