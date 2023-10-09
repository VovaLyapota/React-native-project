import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "~Screens/RegistrationScreen/RegistrationScreen";
import { LogInScreen } from "~Screens/LogInScreen/LogInScreen";
import { Home } from "~Screens/Home/Home";
import { CommentsScreen } from "~Screens/CommentsScreen/CommentsScreen";
import { GetBackButton } from "~components/GetBackButton/GetBackButton";
import { MapScreen } from "~Screens/MapScreen/MapScreen";
import { useSelector } from "react-redux";
import { selectToken } from "~redux/auth/selectors";

const MainStack = createStackNavigator();

export const MainNav = () => {
  const token = useSelector(selectToken);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={token ? "Home" : "Registration"}>
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LogInScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gesturesEnabled: false,
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
};
