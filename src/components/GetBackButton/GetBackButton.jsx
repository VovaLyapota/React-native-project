import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

import getBackIcon from "~icons/getBackIcon.svg";
import { getBackButton } from "./GetBackButtonStyles";
import { useNavigation } from "@react-navigation/native";

export const GetBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack} style={getBackButton}>
      <SvgXml xml={getBackIcon} />
    </TouchableOpacity>
  );
};
