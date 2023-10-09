import { useNavigation } from "@react-navigation/native";
import { logOutButton, profileLogOutButton } from "./LogOutButtonStyles";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import logOutIcon from "~icons/logOutIcon.svg";
import { useDispatch } from "react-redux";
import { logOut } from "~redux/auth/operations";
import { resetPublications } from "~redux/publications/operations";

export const LogOutButton = ({ profile }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={[logOutButton, profile && profileLogOutButton]}
      onPress={() => {
        dispatch(logOut()).finally(() => navigation.navigate("Login"));
        dispatch(resetPublications());
      }}
    >
      <SvgXml width="100%" height="100%" xml={logOutIcon} />
    </TouchableOpacity>
  );
};
