import { Image, TouchableOpacity, View } from "react-native";
import {
  photoPlaseholderContainer,
  addButton,
  addButtonImage,
  userPhoto,
} from "./UserPhotoPlaceholderStyles.js";
const addUserImgIcon = require("~images/addButtonIcon.png");
const userImage = require("~images/userPhoto.jpg");

export const UserPhotoPlaceholder = () => {
  return (
    <View style={photoPlaseholderContainer}>
      {userImage ? <Image source={userImage} style={userPhoto} /> : null}
      <TouchableOpacity style={addButton}>
        <Image source={addUserImgIcon} style={addButtonImage} />
      </TouchableOpacity>
    </View>
  );
};
