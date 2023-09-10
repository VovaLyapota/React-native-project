import { ImageBackground, View } from "react-native";
const backgroundImage = require("~images/backgroundAppImage.jpg");

export const BackgroundContainer = ({
  whiteBoxHeigth,
  whiteBoxTopPadding = 0,
  children,
}) => {
  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: "auto",
            paddingTop: whiteBoxTopPadding,

            width: "100%",
            height: `${whiteBoxHeigth}%`,

            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};
