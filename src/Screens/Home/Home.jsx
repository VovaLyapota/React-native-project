import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePostsScreen } from "~Screens/CreatePostsScreen/CreatePostsScreen";
import { PostsScreen } from "~Screens/PostsScreen/PostsScreen";
import { ProfileScreen } from "~Screens/ProfileScreen/ProfileScreen";
import { GetBackButton } from "~components/GetBackButton/GetBackButton";
import { LogOutButton } from "~components/LogOutButton/LogOutButton";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = "grid-outline";
          } else if (route.name === "CreatePost") {
            iconName = "add-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarStyle: {
          paddingTop: 9,
          paddingBottom: 0,
          paddingHorizontal: "23.07%",
        },
        tabBarItemStyle: {
          maxWidth: 70,
          height: 40,
          borderRadius: 20,
          marginVertical: "auto",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#212121CC",
        tabBarActiveBackgroundColor: "#FF6C00",
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",

          headerRight: () => <LogOutButton />,
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          tabBarStyle: { display: "none" },

          headerLeft: () => <GetBackButton />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};
