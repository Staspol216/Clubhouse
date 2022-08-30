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
      <div style={{ margin: "0 auto", width: 1240, marginTop: 30 }}>
        <Profile
          avatarUrl="static/avatar-placeholder.png"
          fullname={"StasPol"}
          username={"ReaNOD"}
          about="Test info"
        />
      </div>
    </>
  );
};

export default ProfilePage;
