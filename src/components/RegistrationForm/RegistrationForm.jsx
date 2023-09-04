import { useState } from "react";
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
} from "~components/LogInForm/FormStyles";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [shouldHidePassword, setShouldHidePassword] = useState(true);

  const handleSubmit = () => {
    console.log("Login: ", login);
    console.log("Email: ", email);
    console.log("Password: ", password);

    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <View style={formContainer}>
      <TextInput
        style={[formInput, focusedInput === "login" && hoveredFormInput]}
        onFocus={() => setFocusedInput("login")}
        onBlur={() => setFocusedInput(null)}
        onChangeText={setLogin}
        value={login}
        placeholder="Логін"
      />

      <TextInput
        style={[formInput, focusedInput === "email" && hoveredFormInput]}
        onFocus={() => setFocusedInput("email")}
        onBlur={() => setFocusedInput(null)}
        onChangeText={setEmail}
        keyboardType="email-address"
        value={email}
        placeholder="Адреса електронної пошти"
      />

      <View style={passwordContainer}>
        <TextInput
          style={[formInput, focusedInput === "password" && hoveredFormInput]}
          onFocus={() => setFocusedInput("password")}
          onBlur={() => setFocusedInput(null)}
          onChangeText={setPassword}
          secureTextEntry={shouldHidePassword}
          value={password}
          placeholder="Пароль"
        />

        <TouchableOpacity
          style={passwordButton}
          onPress={() => setShouldHidePassword((prewState) => !prewState)}
        >
          <Text style={passwordButtonText}>
            {shouldHidePassword ? "Показати" : "Приховати"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSubmit} style={submitFormButton}>
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
