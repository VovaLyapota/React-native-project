import { Image, TouchableOpacity } from "react-native";
import { BasicContainer } from "~components/BasicContainer/BasicContainer";
import { CreatePost } from "~components/CreatePost/CreatePost";
import { HomeHeader } from "~components/HomeHeader/HomeHeader";

export const CreatePostsScreen = () => {
  return (
    <BasicContainer>
      <HomeHeader title="Створити публікацію" />
      <CreatePost />
    </BasicContainer>
  );
};
