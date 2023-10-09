import { useDispatch } from "react-redux";
import { BackgroundContainer } from "~components/BackgroundContainer";
import { LogOutButton } from "~components/LogOutButton";
import { ProfileUserName } from "~components/ProfileUserName";
import { Publications } from "~components/Publications";
import { UserPhotoPlaceholder } from "~components/UserPhotoPlaceholder";
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
