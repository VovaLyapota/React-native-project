import { useDispatch } from "react-redux";
import { BackgroundContainer } from "~components/BackgroundContainer/BackgroundContainer";
import { LogOutButton } from "~components/LogOutButton/LogOutButton";
import { ProfileUserName } from "~components/ProfileUserName/ProfileUserName";
import { Publications } from "~components/Publications/Publications";
import { UserPhotoPlaceholder } from "~components/UserPhotoPlaceholder/UserPhotoPlaceholder";
import { updateUser } from "~redux/auth/operations";

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <BackgroundContainer whiteBoxHeigth={82}>
      <UserPhotoPlaceholder
        onPhotoChange={(userPhotoURL) =>
          dispatch(
            updateUser({
              photoURL: userPhotoURL,
            })
          )
        }
      />
      <LogOutButton profile />
      <ProfileUserName />
      <Publications profile />
    </BackgroundContainer>
  );
};
