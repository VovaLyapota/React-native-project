import { Image, Text, View } from "react-native";
import {
  homeUserContainer,
  userEmail,
  userImage,
  userImageContainer,
  userInfoContainer,
  userName,
} from "./HomeUserStyles";
import { useSelector } from "react-redux";
import { selectUser } from "~redux/auth/selectors";

export const HomeUser = () => {
  const { name, email, userPhoto } = useSelector(selectUser);

  return (
    <View style={homeUserContainer}>
      <View style={userImageContainer}>
        <Image source={{ uri: userPhoto }} style={userImage} />
      </View>
      <View style={userInfoContainer}>
        <Text style={userName}>{name}</Text>
        <Text style={userEmail}>{email}</Text>
      </View>
    </View>
  );
};
