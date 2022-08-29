import Header from "components/Header";
import Profile from "components/Profile";
import { useRouter } from "next/router";
import { UserData } from "pages";
import { FC } from "react";

interface ProfilePageProps {
  profileData: UserData | null;
}

const ProfilePage: FC<ProfilePageProps> = ({ profileData }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div>
        <Profile
          avatarUrl={profileData.avatarUrl}
          fullname={profileData.fullname}
          username={profileData.username}
          about="Test info"
        />
      </div>
    </>
  );
};

export default ProfilePage;
