import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
const backgroundImage = require("../../images/backgroundAppImage.jpg");
const addUserImgIcon = require("../../images/addButtonIcon.png");
const mainRegularFont = require("../../../assets/fonts/RobotoRegular.ttf");
const mainMediumFont = require("../../../assets/fonts/RobotoMedium.ttf");
// const userAvatar = null;

export const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    Roboto: mainRegularFont,
    RobotoMedium: mainMediumFont,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // main container
    <View>
      <ImageBackground
        source={backgroundImage}
        style={{ width: "100%", height: "100%" }}
      >
        {/* auth container  */}
        <View
          style={{
            alignItems: "center",
            marginTop: "auto",

            width: "100%",
            height: "67%",

            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          {/* User img container */}
          <View
            style={{
              position: "relative",
              marginTop: -60,
              marginBottom: 32,

              width: 120,
              height: 120,

              overflow: "visible",
              backgroundColor: "#F6F6F6",
              borderRadius: 25,
            }}
          >
            {/* Add user img button */}
            <TouchableOpacity
              //   onPress={addUserImg}
              style={{
                position: "absolute",
                bottom: 12,
                right: -12,

                width: 25,
                height: 25,

                borderWidth: 1,
                borderColor: "#FF6C00",
                borderRadius: 12.5,
              }}
            >
              <Image
                source={addUserImgIcon}
                style={{
                  position: "absolute",
                  top: 5.25,
                  left: 5.25,

                  width: 13,
                  height: 13,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* END User img container */}

          {/* Heading text */}
          <Text
            style={{
              marginBottom: 33,
              textAlign: "center",

              color: "#212121",
              fontFamily: "RobotoMedium",
              fontSize: 30,
              letterSpacing: 0.3,
            }}
          >
            Реєстрація
          </Text>
          {/* END Heading text */}

          {/* Registration form */}
          <View
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              gap: 16,

              width: "100%",
            }}
          >
            <TextInput
              style={style.input}
              //   onChangeText={onChangeLogin}
              //   value={number}
              placeholder="Логін"
            />

            <TextInput
              style={style.input}
              //   onChangeText={onChangeEmail}
              //   value={number}
              placeholder="Адреса електронної пошти"
            />

            {/* Password input with show/hide button */}
            <View style={{ position: "relative", marginBottom: 43 }}>
              <TextInput
                style={style.input}
                //   onChangeText={onChangePassword}
                //   value={number}
                placeholder="Пароль"
              />

              <TouchableOpacity
                //   onPress={addUserImg}
                style={{ position: "absolute", top: 15.35, right: 25 }}
              >
                <Text
                  style={{
                    color: "#1B4371",
                    fontFamily: "Roboto",
                    fontSize: 16,
                  }}
                >
                  Показати
                </Text>
              </TouchableOpacity>
            </View>
            {/* END Password input with show/hide button */}

            {/* Submit button */}
            <TouchableOpacity
              //   onPress={handleSubmit}
              style={{
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: 16,
                paddingBottom: 16,

                width: "92%",
                // height: 50,
                borderRadius: 100,
                backgroundColor: "#FF6C00",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Roboto",
                  fontSize: 16,
                }}
              >
                Зареєструватись
              </Text>
            </TouchableOpacity>
            {/* END Submit button */}

            {/* Log in link */}
            <TouchableOpacity
              //   onPress={navigateToLogInForm}
              style={{
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",

                width: "92%",
              }}
            >
              <Text
                style={{
                  color: "#1B4371",
                  fontFamily: "Roboto",
                  fontSize: 16,
                }}
              >
                Вже є акаунт? Увійти
              </Text>
            </TouchableOpacity>
            {/* END Log in link */}
          </View>
          {/* END Registration form */}
        </View>
        {/* END auth container */}
      </ImageBackground>
    </View>
  );
  // main container
};

const style = StyleSheet.create({
  input: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: 16,

    width: "92%",
    height: 50,

    fontFamily: "Roboto",
    fontSize: 16,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
});
