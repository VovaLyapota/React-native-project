import { Text } from "react-native";
import { profileUserName } from "./ProfileUserNameStyles";
import { useSelector } from "react-redux";
import { selectUser } from "~redux/auth/selectors";

export const ProfileUserName = () => {
  const { name } = useSelector(selectUser);

  return <Text style={profileUserName}>{name}</Text>;
};
