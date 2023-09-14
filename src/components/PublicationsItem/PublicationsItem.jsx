import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import comentIcon from "~icons/comentIcon.svg";
import profileComentIcon from "~icons/profileComentIcon.svg";
import likeIcon from "~icons/likeIcon.svg";
import locationIcon from "~icons/locationIcon.svg";
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

export const PublicationsItem = ({ profile }) => {
  const navigation = useNavigation();

  return (
    <View style={publicationContainer}>
      <Image source={postImg} style={publicationImage} />
      <Text style={publicationName}>Ліс</Text>
      <View style={publicationInfo}>
        <TouchableOpacity
          style={publicationDetails}
          onPress={() => navigation.navigate("PostComments")}
        >
          <SvgXml xml={profile ? profileComentIcon : comentIcon} />
          <Text style={comentsValue}>0</Text>
        </TouchableOpacity>

        {profile && (
          <View style={publicationDetails}>
            <SvgXml xml={likeIcon} />
            <Text style={comentsValue}>153</Text>
          </View>
        )}

        <View style={locationDetails}>
          <SvgXml xml={locationIcon} />

          <Text style={location}>
            {!profile && "Ivano-Frankivs'k Region, "}Ukraine
          </Text>
        </View>
      </View>
    </View>
  );
};
