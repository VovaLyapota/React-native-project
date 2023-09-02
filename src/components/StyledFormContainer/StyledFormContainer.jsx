import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PropTypes from "prop-types";

const backgroundImage = require("../../images/backgroundAppImage.jpg");

export const StyledFormContainer = ({ formType = "reg", children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={formType === "reg" ? 50 : -200}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <ImageBackground
            source={backgroundImage}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                alignItems: "center",
                marginTop: "auto",
                paddingTop: formType === "reg" ? 0 : 33,

                width: "100%",
                height: `${formType === "reg" ? 67 : 60}%`,

                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
              }}
            >
              {children}
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

StyledFormContainer.propTypes = { formType: PropTypes.string };
