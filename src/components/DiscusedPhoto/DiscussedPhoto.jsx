import { Image, View } from "react-native";
import {
  discussedPhoto,
  discussedPhotoContainer,
} from "./DiscussedPhotoStyles";

export const DiscussedPhoto = ({ imageURI }) => {
  return (
    <View style={discussedPhotoContainer}>
      <Image source={{ uri: imageURI }} style={discussedPhoto} />
    </View>
  );
};
