import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "~Screens/RegistrationScreen/RegistrationScreen";
import { LogInScreen } from "~Screens/LogInScreen/LogInScreen";
import { Home } from "~Screens/Home/Home";
import { CommentsScreen } from "~Screens/CommentsScreen/CommentsScreen";
import { GetBackButton } from "~components/GetBackButton/GetBackButton";
import { MapScreen } from "~Screens/MapScreen/MapScreen";
const mainRegularFont = require("./assets/fonts/RobotoRegular.ttf");
const mainMediumFont = require("./assets/fonts/RobotoMedium.ttf");
const mainBoldFont = require("./assets/fonts/RobotoBold.ttf");

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: mainRegularFont,
    RobotoMedium: mainMediumFont,
    RobotoBold: mainBoldFont,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LogInScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="PostComments"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerTitleAlign: "center",

            headerLeft: () => <GetBackButton />,
          }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: "Карта",
            headerTitleAlign: "center",

            headerLeft: () => <GetBackButton />,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
