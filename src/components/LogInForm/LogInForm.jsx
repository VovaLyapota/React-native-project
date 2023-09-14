import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  formContainer,
  formInput,
  hoveredFormInput,
  passwordButton,
  passwordButtonText,
  passwordContainer,
  submitFormButton,
  submitFormButtonText,
} from "./FormStyles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [shouldHidePassword, setShouldHidePassword] = useState(true);

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);

    setEmail("");
    setPassword("");

    navigation.navigate("Home");
  };

  return (
    <View style={formContainer}>
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
        <Text style={submitFormButtonText}>Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};
