import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const LogInForm = () => {
  return (
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
        // onChangeText={onChangeEmail}
        // value={number}
        placeholder="Адреса електронної пошти"
      />

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

      <TouchableOpacity
        //   onPress={handleSubmit}
        style={{
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 16,
          paddingBottom: 16,

          width: "92%",
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
    </View>
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
