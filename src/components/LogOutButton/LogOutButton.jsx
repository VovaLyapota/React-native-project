import { useNavigation } from "@react-navigation/native";
import { logOutButton, profileLogOutButton } from "./LogOutButtonStyles";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import logOutIcon from "~icons/logOutIcon.svg";

export const LogOutButton = ({ profile }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[logOutButton, profile && profileLogOutButton]}
      onPress={() => navigation.navigate("Login")}
    >
      <SvgXml width="100%" height="100%" xml={logOutIcon} />
    </TouchableOpacity>
  );
};
