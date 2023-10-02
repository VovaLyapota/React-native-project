import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import sendComentIcon from "~icons/sendComentIcon.svg";
import {
  commentInput,
  commentInputContiner,
  commentSubmitButton,
} from "./CommentInputStyles";
import { useSelector } from "react-redux";
import { selectUser } from "~redux/auth/selectors";

export const CommentInput = ({ sendComment }) => {
  const { name, userPhoto } = useSelector(selectUser);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    sendComment(name, userPhoto, comment);
    setComment("");
  };

  return (
    <View style={commentInputContiner}>
      <TextInput
        style={commentInput}
        onChangeText={setComment}
        value={comment}
        placeholder="Коментувати..."
      />
      <TouchableOpacity onPress={handleSubmit} style={commentSubmitButton}>
        <SvgXml xml={sendComentIcon} />
      </TouchableOpacity>
    </View>
  );
};
