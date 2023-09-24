import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "~Screens/RegistrationScreen/RegistrationScreen";
import { LogInScreen } from "~Screens/LogInScreen/LogInScreen";
import { Home } from "~Screens/Home/Home";
import { CommentsScreen } from "~Screens/CommentsScreen/CommentsScreen";
import { GetBackButton } from "~components/GetBackButton/GetBackButton";
import { MapScreen } from "~Screens/MapScreen/MapScreen";

const MainStack = createStackNavigator();

export const MainNav = () => {
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
};
