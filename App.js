import { useFonts } from "expo-font";
import { RegistrationScreen } from "~Screens/RegistrationScreen/RegistrationScreen";
import { LogInScreen } from "~Screens/LogInScreen/LogInScreen";
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

  // return <LogInScreen />;
  return <RegistrationScreen />;
}
