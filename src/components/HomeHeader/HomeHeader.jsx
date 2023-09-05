import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  getBackButton,
  homeHeader,
  headerNav,
  headerTitle,
  logOutBUtton,
} from "./HomeHeaderStyles";
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
            <TouchableOpacity
              style={logOutBUtton}
              //   onPress={returnToPreviousPath}
            >
              <Image source={logOutIcon} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
