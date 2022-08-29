import Avatar from "components/Avatar";
import { BackButton } from "components/BackButton";
import Link from "next/link";
import { FC } from "react";
import * as Styled from "./styles";

interface ProfileProps {
  fullname: string;
  username: string;
  avatarUrl: string;
  about: string;
}

const Profile: FC<ProfileProps> = ({
  fullname,
  username,
  avatarUrl,
  about,
}) => {
  return (
    <>
      <Link href="/rooms">
        <a>
          <BackButton title="Back" href="/rooms" />
        </a>
      </Link>
      <Styled.Body>
        <Styled.Content>
          <Avatar src={avatarUrl} width="100px" height="100px" />
          <Styled.Info>
            <h2>{fullname}</h2>
            <h3>{username}</h3>
          </Styled.Info>
        </Styled.Content>
        <Styled.FollowButton color="blue">Follow</Styled.FollowButton>
      </Styled.Body>
      <Styled.About>{about}</Styled.About>
    </>
  );
};

export default Profile;
