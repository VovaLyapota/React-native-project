import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LogInScreen } from "./src/Screens/LogInScreen/LogInScreen";
import { useFonts } from "expo-font";
const mainRegularFont = require("./assets/fonts/RobotoRegular.ttf");
const mainMediumFont = require("./assets/fonts/RobotoMedium.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: mainRegularFont,
    RobotoMedium: mainMediumFont,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <LogInScreen />;
  // return <RegistrationScreen />;
}
