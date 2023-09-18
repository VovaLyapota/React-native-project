import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import removePhotoIcon from "~icons/trashIcon.svg";
import { deletePostButton } from "./DeletePostButtonStyles";

export const DeletePostButton = ({ callback }) => {
  return (
    <TouchableOpacity style={deletePostButton} onPress={callback}>
      <SvgXml xml={removePhotoIcon} />
    </TouchableOpacity>
  );
};
