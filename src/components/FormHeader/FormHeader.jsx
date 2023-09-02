import { Text } from "react-native";
import { formHeaderStyles } from "./FormHeaderStyles";

export const FormHeader = ({ children }) => {
  return <Text style={formHeaderStyles}>{children}</Text>;
};
