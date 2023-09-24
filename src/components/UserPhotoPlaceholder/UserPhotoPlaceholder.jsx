import { Image, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SvgXml } from "react-native-svg";
import addUserPhotoIcon from "~icons/addButtonIcon.svg";
import {
  photoPlaseholderContainer,
  addButton,
  userPhotoStyles,
} from "./UserPhotoPlaceholderStyles.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "~redux/auth/selectors.js";

export const UserPhotoPlaceholder = ({ onPhotoChange }) => {
  const { userPhoto } = useSelector(selectUser);
  const [image, setImage] = useState(userPhoto);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onPhotoChange(result.assets[0].uri);
    }
  };

  return (
    <View style={photoPlaseholderContainer}>
      {image ? <Image source={{ uri: image }} style={userPhotoStyles} /> : null}
      <TouchableOpacity
        style={[addButton, !image && { transform: [{ rotate: "45deg" }] }]}
        onPress={pickImage}
      >
        <SvgXml xml={addUserPhotoIcon} />
      </TouchableOpacity>
    </View>
  );
};
