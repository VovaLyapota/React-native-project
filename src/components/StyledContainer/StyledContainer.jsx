import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
const backgroundImage = require("../../images/backgroundAppImage.jpg");

export const StyledContainer = ({ keyboardVerticalOffset = 0, children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
      //   style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <ImageBackground
            source={backgroundImage}
            style={{ width: "100%", height: "100%" }}
          >
            {children}
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
