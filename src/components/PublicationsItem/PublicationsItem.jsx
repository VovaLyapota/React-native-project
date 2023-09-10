import { Image, Text, View } from "react-native";
import {
  comentsValue,
  location,
  locationDetails,
  publicationContainer,
  publicationDetails,
  publicationImage,
  publicationInfo,
  publicationName,
} from "./PublicationsItemStyles";

const postImg = require("~images/fakePublicationPhoto.jpg");
const comentIcon = require("~images/comentIcon.png");
const profileComentIcon = require("~images/profileComentIcon.png");
const likeIcon = require("~images/likeIcon.png");
const locationIcon = require("~images/locationIcon.png");

export const PublicationsItem = ({ profile }) => {
  return (
    <View style={publicationContainer}>
      <Image source={postImg} style={publicationImage} />
      <Text style={publicationName}>Ліс</Text>
      <View style={publicationInfo}>
        <View style={publicationDetails}>
          <Image source={profile ? profileComentIcon : comentIcon} />
          <Text style={comentsValue}>0</Text>
        </View>

        {profile && (
          <View style={publicationDetails}>
            <Image source={likeIcon} />
            <Text style={comentsValue}>153</Text>
          </View>
        )}

        <View style={locationDetails}>
          <Image source={locationIcon} />
          <Text style={location}>
            {!profile && "Ivano-Frankivs'k Region, "}Ukraine
          </Text>
        </View>
      </View>
    </View>
  );
};
