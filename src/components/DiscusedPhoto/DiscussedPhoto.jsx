import { Image, View } from "react-native";
import {
  discussedPhoto,
  discussedPhotoContainer,
} from "./DiscussedPhotoStyles";
const postImg = require("~images/fakePublicationPhoto.jpg");

export const DiscussedPhoto = () => {
  return (
    <View style={discussedPhotoContainer}>
      <Image source={postImg} style={discussedPhoto} />
    </View>
  );
};
