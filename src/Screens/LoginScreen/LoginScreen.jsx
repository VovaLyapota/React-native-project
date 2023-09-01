import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { StyledContainer } from "../../components/StyledContainer/StyledContainer";
const mainRegularFont = require("../../../assets/fonts/RobotoRegular.ttf");
const mainMediumFont = require("../../../assets/fonts/RobotoMedium.ttf");

export const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    Roboto: mainRegularFont,
    RobotoMedium: mainMediumFont,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // main container
    <StyledContainer keyboardVerticalOffset={-200}>
      {/* auth container  */}
      <View
        style={{
          alignItems: "center",
          marginTop: "auto",

          width: "100%",
          height: "60%",

          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        {/* Heading text */}
        <Text
          style={{
            marginTop: 33,
            marginBottom: 33,
            textAlign: "center",

            color: "#212121",
            fontFamily: "RobotoMedium",
            fontSize: 30,
            letterSpacing: 0.3,
          }}
        >
          Увійти
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
              Увійти
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
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
          {/* END Log in link */}
        </View>
        {/* END Registration form */}
      </View>
      {/* END auth container */}
    </StyledContainer>
    // END main container
  );
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
