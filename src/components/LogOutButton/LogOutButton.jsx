import { logOutButton, profileLogOutButton } from "./LogOutButtonStyles";
import { Image, TouchableOpacity } from "react-native";

const logOutIcon = require("~images/logOutIcon.png");

export const LogOutButton = ({ profile }) => {
  return (
    <TouchableOpacity
      style={[logOutButton, profile && profileLogOutButton]}
      //   onPress={returnToPreviousPath}
    >
      <Image source={logOutIcon} />
    </TouchableOpacity>
  );
};
