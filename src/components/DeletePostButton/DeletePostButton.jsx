import { Image, TouchableOpacity } from "react-native";
import { deletePostButton } from "./DeletePostButtonStyles";
const removePhotoIcon = require("~images/trashIcon.png");

export const DeletePostButton = () => {
  return (
    <TouchableOpacity style={deletePostButton}>
      <Image source={removePhotoIcon} />
    </TouchableOpacity>
  );
};
