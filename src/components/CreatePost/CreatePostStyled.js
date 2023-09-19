export const createPostContainer = {
  paddingHorizontal: 16,
  paddingVertical: 32,
};

export const addPhotoContiner = {
  position: "relative",

  marginBottom: 8,

  width: "100%",
  height: 240,

  backgroundColor: "#F6F6F6",
  borderWidth: 1,
  borderColor: "#E8E8E8",
  borderRadius: 8,
};

export const selectedPhoto = { width: "100%", height: "100%", borderRadius: 8 };

export const addPhotoButton = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: [{ translateX: -30 }, { translateY: -30 }],

  justifyContent: "center",
  alignItems: "center",

  width: 60,
  height: 60,

  backgroundColor: "#FFFFFF",
  opacity: 0.7,
  borderRadius: 30,
};

export const addPhotoTextButton = {
  color: "#BDBDBD",
  fontFamily: "Roboto",
  fontSize: 16,
};

export const publicationInput = {
  marginBottom: 16,
  paddingVertical: 16,

  color: "#212121",

  borderWidth: 1,
  borderColor: "transparent",
  borderBottomColor: "#E8E8E8",
};

export const locationInput = {
  ...publicationInput,

  marginBottom: 32,
  paddingLeft: 28,
};

export const publicationInputWithText = {
  fontFamily: "RobotoMedium",
  fontSize: 16,
};

export const publicationInputFocused = {
  borderBottomColor: "#FF6C00",
};

export const locationIcon = { position: "absolute", top: 13 };

export const submitButtonDisabled = {
  alignItems: "center",
  paddingVertical: 16,

  width: "100%",

  borderRadius: 100,
  backgroundColor: "#F6F6F6",

  pointerEvents: "none",
};

export const submitButtonActive = {
  pointerEvents: "auto",
  backgroundColor: "#FF6C00",
};

export const submitTextDisabled = {
  color: "#BDBDBD",
  fontFamily: "Roboto",
  fontSize: 16,
};

export const submitTextActive = {
  color: "#FFFFFF",
};
