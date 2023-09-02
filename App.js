import { Registration } from "./src/components/Registration/Registration";
import { LogIn } from "./src/components/LogIn/LogIn";
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

  // return <LogIn />;
  return <Registration />;
}
