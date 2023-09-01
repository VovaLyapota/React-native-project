import { Image, TouchableOpacity, View } from "react-native";
const addUserImgIcon = require("../../images/addButtonIcon.png");

export const UserPhotoPlaceholder = () => {
  return (
    // User img container
    <View
      style={{
        position: "relative",
        marginTop: -60,
        marginBottom: 32,

        width: 120,
        height: 120,

        overflow: "visible",
        backgroundColor: "#F6F6F6",
        borderRadius: 25,
      }}
    >
      {/* Add user img button */}
      <TouchableOpacity
        //   onPress={addUserImg}
        style={{
          position: "absolute",
          bottom: 12,
          right: -12,

          width: 25,
          height: 25,

          borderWidth: 1,
          borderColor: "#FF6C00",
          borderRadius: 12.5,
        }}
      >
        <Image
          source={addUserImgIcon}
          style={{
            position: "absolute",
            top: 5.25,
            left: 5.25,

            width: 13,
            height: 13,
          }}
        />
      </TouchableOpacity>
    </View>
    // END User img container
  );
};
