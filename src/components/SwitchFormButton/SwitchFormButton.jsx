import { Text, TouchableOpacity } from "react-native";
import { navButton, navButtonText } from "./SwitchFormButtonStyles";
import { useNavigation } from "@react-navigation/native";

export const SwitchFormButton = ({ title, path }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(path)}
      style={navButton}
    >
      <Text style={navButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
