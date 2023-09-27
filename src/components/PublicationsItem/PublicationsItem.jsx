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

export const PublicationsItem = ({
  profile,
  comments,
  likes,
  postCoords,
  postImage,
  postLocation,
  postName,
}) => {
  const navigation = useNavigation();

  return (
    <View style={publicationContainer}>
      <Image source={{ uri: postImage }} style={publicationImage} />
      <Text style={publicationName}>{postName}</Text>
      <View style={publicationInfo}>
        <TouchableOpacity
          style={publicationDetails}
          onPress={() => navigation.navigate("PostComments")}
        >
          <SvgXml xml={profile ? profileComentIcon : comentIcon} />
          <Text style={comentsValue}>{comments.length}</Text>
        </TouchableOpacity>

        {profile && (
          <View style={publicationDetails}>
            <SvgXml xml={likeIcon} />
            <Text style={comentsValue}>{likes}</Text>
          </View>
        )}

        <TouchableOpacity
          style={locationDetails}
          onPress={() =>
            navigation.navigate("MapScreen", {
              postCoords,
            })
          }
        >
          <SvgXml xml={locationIcon} />

          <Text style={location}>{postLocation}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
