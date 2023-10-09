import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { register } from "~redux/auth/operations";
import {
  formContainer,
  formInput,
  hoveredFormInput,
  passwordButton,
  passwordButtonText,
  passwordContainer,
  submitFormButton,
  submitFormButtonDisabled,
  submitFormButtonText,
} from "~components/LogInForm/FormStyles";
import { toast } from "~utils/toast";

export const RegistrationForm = ({ userPhotoURL }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [shouldHidePassword, setShouldHidePassword] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsSubmitting(true);

    dispatch(register({ login, userPhotoURL, email, password }))
      .then((response) => {
        if (typeof response.payload === "string") {
          toast(response.payload, 2500);
          return;
        }
        resetForm();

        navigation.navigate("Home");
      })
      .finally(() => setIsSubmitting(false));
  };

  const resetForm = () => {
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

      <TouchableOpacity
        onPress={handleSubmit}
        style={[submitFormButton, isSubmitting && submitFormButtonDisabled]}
      >
        <Text style={submitFormButtonText}>Зареєструватись</Text>
      </TouchableOpacity>
    </View>
  );
};
