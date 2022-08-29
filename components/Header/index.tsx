import Avatar from "components/Avatar";
import Link from "next/link";
import { FC } from "react";
import * as Styled from "./styles";

const Header: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Inner>
        <Link href="/rooms">
          <Styled.Title>
            <Styled.Logo
              width="32px"
              height="32px"
              src="/static/hand-wave.png"
              alt="Logo"
            />
            <h4>Clubhouse</h4>
          </Styled.Title>
        </Link>
        <Link href="/profile/1">
          <Styled.AvatarWrapper>
            <b>hfhgfghfghf</b>
            <Avatar width="40px" height="40px" />
          </Styled.AvatarWrapper>
        </Link>
      </Styled.Inner>
    </Styled.Wrapper>
  );
};

export default Header;
