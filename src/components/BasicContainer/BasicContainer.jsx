import { View } from "react-native";
import { basicUserContainer } from "./BasicContainerStyles";

export const BasicContainer = ({ children }) => {
  return <View style={basicUserContainer}>{children}</View>;
};
