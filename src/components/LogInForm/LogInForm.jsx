import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  formContainer,
  formInput,
  hoveredFormInput,
  navButton,
  navButtonText,
  passwordButton,
  passwordButtonText,
  passwordContainer,
  submitFormButton,
  submitFormButtonText,
} from "./FormStyles";
import { useState } from "react";

export const LogInForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <View style={formContainer}>
      <TextInput
        style={[formInput, focusedInput === "email" && hoveredFormInput]}
        onFocus={() => setFocusedInput("email")}
        onBlur={() => setFocusedInput(null)}
        // onChangeText={onChangeEmail}
        // value={number}
        placeholder="Адреса електронної пошти"
      />

      <View style={passwordContainer}>
        <TextInput
          style={[formInput, focusedInput === "password" && hoveredFormInput]}
          onFocus={() => setFocusedInput("password")}
          onBlur={() => setFocusedInput(null)}
          //   onChangeText={onChangePassword}
          //   value={number}
          placeholder="Пароль"
        />

        <TouchableOpacity
          //   onPress={addUserImg}
          style={passwordButton}
        >
          <Text style={passwordButtonText}>Показати</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        //   onPress={handleSubmit}
        style={submitFormButton}
      >
        <Text style={submitFormButtonText}>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //   onPress={navigateToLogInForm}
        style={navButton}
      >
        <Text style={navButtonText}>Немає акаунту? Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
};
