import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { MainNav } from "~components/MainNav";
import { store, persistor } from "~redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RootSiblingParent } from "react-native-root-siblings";

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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootSiblingParent>
          <MainNav />
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
}
