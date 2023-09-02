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
} from "../LogInForm/FormStyles";
import { useState } from "react";

export const RegistrationForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <View style={formContainer}>
      <TextInput
        style={[formInput, focusedInput === "login" && hoveredFormInput]}
        onFocus={() => setFocusedInput("login")}
        onBlur={() => setFocusedInput(null)}
        //   onChangeText={onChangeLogin}
        //   value={login}
        placeholder="Логін"
      />

      <TextInput
        style={[formInput, focusedInput === "email" && hoveredFormInput]}
        onFocus={() => setFocusedInput("email")}
        onBlur={() => setFocusedInput(null)}
        //   onChangeText={onChangeEmail}
        //   value={email}
        placeholder="Адреса електронної пошти"
      />

      <View style={passwordContainer}>
        <TextInput
          style={[formInput, focusedInput === "password" && hoveredFormInput]}
          onFocus={() => setFocusedInput("password")}
          onBlur={() => setFocusedInput(null)}
          //   onChangeText={onChangePassword}
          //   value={password}
          placeholder="Пароль"
        />

        <TouchableOpacity
          //   onPress={showPassword}
          style={passwordButton}
        >
          <Text style={passwordButtonText}>Показати</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        //   onPress={handleSubmit}
        style={submitFormButton}
      >
        <Text style={submitFormButtonText}>Зареєструватись</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //   onPress={navigateToLogInForm}
        style={navButton}
      >
        <Text style={navButtonText}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};
