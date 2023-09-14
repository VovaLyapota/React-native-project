import { BackgroundContainer } from "~components/BackgroundContainer/BackgroundContainer";
import { LogOutButton } from "~components/LogOutButton/LogOutButton";
import { ProfileUserName } from "~components/ProfileUserName/ProfileUserName";
import { Publications } from "~components/Publications/Publications";
import { UserPhotoPlaceholder } from "~components/UserPhotoPlaceholder/UserPhotoPlaceholder";

export const ProfileScreen = () => {
  return (
    <BackgroundContainer whiteBoxHeigth={82}>
      <UserPhotoPlaceholder />
      <LogOutButton profile />
      <ProfileUserName />
      <Publications profile />
    </BackgroundContainer>
  );
};
