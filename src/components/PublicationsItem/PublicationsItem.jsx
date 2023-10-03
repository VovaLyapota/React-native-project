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
import { useState } from "react";
import { sendLikeToPublicationDB } from "~firebace/firedatabase";

export const PublicationsItem = ({
  profile,
  authorName,
  postId,
  likes,
  comments,
  postCoords,
  postImage,
  postLocation,
  postName,
}) => {
  const [likesValue, setLikesValue] = useState(likes);
  const navigation = useNavigation();

  const sendLike = async () => {
    await sendLikeToPublicationDB(postId, authorName);
    setLikesValue((prevValue) => prevValue + 1);
  };

  return (
    <View style={publicationContainer}>
      <Image source={{ uri: postImage }} style={publicationImage} />
      <Text style={publicationName}>{postName}</Text>
      <View style={publicationInfo}>
        <TouchableOpacity
          style={publicationDetails}
          onPress={() =>
            navigation.navigate("PostComments", {
              authorName,
              postId,
              postImage,
              comments,
            })
          }
        >
          <SvgXml xml={profile ? profileComentIcon : comentIcon} />
          <Text style={comentsValue}>{comments?.length || 0}</Text>
        </TouchableOpacity>

        {profile && (
          <TouchableOpacity onPress={sendLike} style={publicationDetails}>
            <SvgXml xml={likeIcon} />
            <Text style={comentsValue}>{likesValue}</Text>
          </TouchableOpacity>
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
