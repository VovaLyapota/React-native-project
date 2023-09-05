import { Image, Text, View } from "react-native";
import {
  comentsValue,
  location,
  publicationContainer,
  publicationDetails,
  publicationImage,
  publicationInfo,
  publicationName,
} from "./PublicationsItemStyles";

const postImg = require("~images/fakePublicationPhoto.jpg");
const comentIcon = require("~images/comentIcon.png");
const locationIcon = require("~images/locationIcon.png");

export const PublicationsItem = () => {
  return (
    <View style={publicationContainer}>
      <Image source={postImg} style={publicationImage} />
      <Text style={publicationName}>Ліс</Text>
      <View style={publicationInfo}>
        <View style={publicationDetails}>
          <Image source={comentIcon} />
          <Text style={comentsValue}>0</Text>
        </View>
        <View style={publicationDetails}>
          <Image source={locationIcon} />
          <Text style={location}>Ivano-Frankivs'k Region, Ukraine</Text>
        </View>
      </View>
    </View>
  );
};
