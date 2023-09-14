import { Image, Text, View } from "react-native";
import {
  commentContainer,
  commentDate,
  commentText,
  commentUserContainer,
  commentUserDate,
  commentatorPhoto,
  messageCommentContainer,
  messageCommentContainerFlex,
} from "./PublicationCommentItemStyles";
const userImg = require("~images/userPhoto.jpg");
const fakeComentatorImg = require("~images/fakeComentator.jpg");

export const PublicationCommentItem = ({ userId, message, time }) => {
  const isUserMessage = userId === 2;

  return (
    <View
      style={[
        messageCommentContainer,
        isUserMessage && messageCommentContainerFlex,
      ]}
    >
      {!isUserMessage && (
        <Image source={fakeComentatorImg} style={commentatorPhoto} />
      )}
      <View style={[commentContainer, isUserMessage && commentUserContainer]}>
        <Text style={commentText}>{message}</Text>
        <Text style={[commentDate, isUserMessage && commentUserDate]}>
          {time}
        </Text>
      </View>
      {isUserMessage && <Image source={userImg} style={commentatorPhoto} />}
    </View>
  );
};
