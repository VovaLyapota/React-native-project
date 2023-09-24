import Toast from "react-native-root-toast";

export const toast = (text, duration) => {
  let toast = Toast.show(text, {
    duration: Toast.durations.LONG,
    backgroundColor: "tomato",
    shadow: false,
    position: Toast.positions.TOP,
  });
  setTimeout(function hideToast() {
    Toast.hide(toast);
  }, duration);
};
