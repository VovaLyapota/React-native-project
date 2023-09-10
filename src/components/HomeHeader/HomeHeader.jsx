import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  getBackButton,
  homeHeader,
  headerNav,
  headerTitle,
  logOutButton,
} from "./HomeHeaderStyles";
import { LogOutButton } from "~components/LogOutButton/LogOutButton";
const getBackIcon = require("~images/getBackIcon.png");
const logOutIcon = require("~images/logOutIcon.png");

export const HomeHeader = ({ title }) => {
  return (
    <View style={homeHeader}>
      <View style={headerNav}>
        {title ? (
          <>
            <TouchableOpacity
              style={getBackButton}
              //   onPress={returnToPreviousPath}
            >
              <Image source={getBackIcon} />
            </TouchableOpacity>
            <Text style={headerTitle}>{title}</Text>
          </>
        ) : (
          <>
            <Text style={headerTitle}>Публікації</Text>
            <LogOutButton />
          </>
        )}
      </View>
    </View>
  );
};
