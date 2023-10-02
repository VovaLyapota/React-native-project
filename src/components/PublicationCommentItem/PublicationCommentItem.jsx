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
import { selectUser } from "~redux/auth/selectors";
import { useSelector } from "react-redux";

export const PublicationCommentItem = ({
  comentatorName,
  comentatorPhoto,
  message,
  time,
}) => {
  const { name } = useSelector(selectUser);
  const isUserMessage = name === comentatorName;

  return (
    <View
      style={[
        messageCommentContainer,
        isUserMessage && messageCommentContainerFlex,
      ]}
    >
      {!isUserMessage && (
        <Image source={{ uri: comentatorPhoto }} style={commentatorPhoto} />
      )}
      <View style={[commentContainer, isUserMessage && commentUserContainer]}>
        <Text style={commentText}>{message}</Text>
        <Text style={[commentDate, isUserMessage && commentUserDate]}>
          {time}
        </Text>
      </View>
      {isUserMessage && (
        <Image source={{ uri: comentatorPhoto }} style={commentatorPhoto} />
      )}
    </View>
  );
};
