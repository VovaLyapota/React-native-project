import { Text } from "react-native";

export const FormHeader = ({ children }) => {
  return (
    <Text
      style={{
        marginBottom: 33,
        textAlign: "center",

        color: "#212121",
        fontFamily: "RobotoMedium",
        fontSize: 30,
        letterSpacing: 0.3,
      }}
    >
      {children}
    </Text>
  );
};
