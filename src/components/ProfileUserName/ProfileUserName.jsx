import { Text } from "react-native";
import fakeUser from "~fakeUser.json";
import { profileUserName } from "./ProfileUserNameStyles";

export const ProfileUserName = () => {
  return <Text style={profileUserName}>{fakeUser.login}</Text>;
};
