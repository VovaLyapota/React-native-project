import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

import getBackIcon from "~icons/getBackIcon.svg";
import { getBackButton } from "./GetBackButtonStyles";

export const GetBackButton = () => {
  return (
    <TouchableOpacity
      //   onPress={returnToPreviousPath}
      style={getBackButton}
    >
      <SvgXml xml={getBackIcon} />
    </TouchableOpacity>
  );
};
