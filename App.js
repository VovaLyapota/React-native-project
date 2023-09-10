import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "~Screens/RegistrationScreen/RegistrationScreen";
import { LogInScreen } from "~Screens/LogInScreen/LogInScreen";
import { Home } from "~Screens/Home/Home";
import { CreatePostsScreen } from "~Screens/CreatePostsScreen/CreatePostsScreen";
import { CommentsScreen } from "~Screens/CommentsScreen/CommentsScreen";
import { ProfileScreen } from "~Screens/ProfileScreen/ProfileScreen";
const mainRegularFont = require("./assets/fonts/RobotoRegular.ttf");
const mainMediumFont = require("./assets/fonts/RobotoMedium.ttf");
const mainBoldFont = require("./assets/fonts/RobotoBold.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: mainRegularFont,
    RobotoMedium: mainMediumFont,
    RobotoBold: mainBoldFont,
  });

  if (!fontsLoaded) {
    return null;
  }

  // return <LogInScreen />;
  // return <RegistrationScreen />;
  // return <Home />;
  // return <CreatePostsScreen />;
  // return <CommentsScreen />;
  return <ProfileScreen />;
}
