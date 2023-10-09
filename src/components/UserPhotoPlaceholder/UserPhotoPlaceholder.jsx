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
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "~redux/auth/selectors.js";
import { updateUser } from "~redux/auth/operations.js";
import { addImageDB } from "~firebace/firestorage.js";

export const UserPhotoPlaceholder = ({ onPhotoChange }) => {
  const { userPhoto } = useSelector(selectUser);
  const token = useSelector(selectToken);
  const [image, setImage] = useState(userPhoto);

  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const resultURI = result.assets[0].uri;

      if (token) {
        const userPhotoURI = await addImageDB(resultURI, token);
        dispatch(
          updateUser({
            photoURL: userPhotoURI,
          })
        );
        return;
      }

      setImage(resultURI);
      onPhotoChange(resultURI);
    }
  };

  return (
    <View style={photoPlaseholderContainer}>
      {image ? (
        <Image source={{ uri: userPhoto || image }} style={userPhotoStyles} />
      ) : null}
      <TouchableOpacity
        style={[addButton, !image && { transform: [{ rotate: "45deg" }] }]}
        onPress={pickImage}
      >
        <SvgXml xml={addUserPhotoIcon} />
      </TouchableOpacity>
    </View>
  );
};
