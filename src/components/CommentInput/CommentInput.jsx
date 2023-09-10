import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import {
  commentInput,
  commentInputContiner,
  commentSubmitButton,
} from "./CommentInputStyles";
const sendComentIcon = require("~images/sendComentIcon.png");

export const CommentInput = () => {
  const [comment, setComment] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = () => {
    console.log(comment);
    setComment("");
  };

  return (
    <View style={commentInputContiner}>
      <TextInput
        style={commentInput}
        onFocus={() => setFocusedInput("comment")}
        onBlur={() => setFocusedInput(null)}
        onChangeText={setComment}
        value={comment}
        placeholder="Коментувати..."
      />
      <TouchableOpacity onPress={handleSubmit} style={commentSubmitButton}>
        <Image source={sendComentIcon} />
      </TouchableOpacity>
    </View>
  );
};
