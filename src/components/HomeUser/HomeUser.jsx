import { Image, Text, View } from "react-native";
import user from "~fakeUser.json";
import {
  homeUserContainer,
  userEmail,
  userImage,
  userInfoContainer,
  userName,
} from "./HomeUserStyles";
const userImg = require("~images/userPhoto.jpg");

export const HomeUser = () => {
  return (
    <View style={homeUserContainer}>
      <Image source={userImg} style={userImage} />
      <View style={userInfoContainer}>
        <Text style={userName}>{user.login}</Text>
        <Text style={userEmail}>{user.email}</Text>
      </View>
    </View>
  );
};
