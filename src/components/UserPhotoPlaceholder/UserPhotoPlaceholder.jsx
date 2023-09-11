import { Image, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import addUserPhotoIcon from "~icons/addButtonIcon.svg";
import {
  photoPlaseholderContainer,
  addButton,
  userPhoto,
} from "./UserPhotoPlaceholderStyles.js";
const userImage = require("~images/userPhoto.jpg");

export const UserPhotoPlaceholder = () => {
  return (
    <View style={photoPlaseholderContainer}>
      {userImage ? <Image source={userImage} style={userPhoto} /> : null}
      <TouchableOpacity
        style={[addButton, !userImage && { transform: [{ rotate: "45deg" }] }]}
      >
        <SvgXml xml={addUserPhotoIcon} />
      </TouchableOpacity>
    </View>
  );
};
