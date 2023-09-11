import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { LogOutButton } from "~components/LogOutButton/LogOutButton";
import getBackIcon from "~icons/getBackIcon.svg";
import {
  getBackButton,
  homeHeader,
  headerNav,
  headerTitle,
} from "./HomeHeaderStyles";

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
              <SvgXml xml={getBackIcon} />
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
