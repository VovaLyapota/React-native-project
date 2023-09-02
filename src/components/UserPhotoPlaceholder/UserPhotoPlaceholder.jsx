import { Image, TouchableOpacity, View } from "react-native";
import {
  photoPlaseholderContainer,
  addButton,
  addButtonImage,
} from "./UserPhotoPlaceholderStyles.js";
const addUserImgIcon = require("../../images/addButtonIcon.png");

export const UserPhotoPlaceholder = () => {
  return (
    <View style={photoPlaseholderContainer}>
      <TouchableOpacity style={addButton}>
        <Image source={addUserImgIcon} style={addButtonImage} />
      </TouchableOpacity>
    </View>
  );
};
