import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import addLocationIcon from "~icons/locationIcon.svg";
import addPhotoIcon from "~icons/cameraIcon.svg";
import {
  addPhotoButton,
  addPhotoContiner,
  addPhotoTextButton,
  createPostContainer,
  locationIcon,
  publicationInput,
  publicationInputFocused,
  publicationInputWithText,
  locationInput,
  selectedPhoto,
  submitButtonActive,
  submitButtonDisabled,
  submitTextActive,
  submitTextDisabled,
  cameraStyles,
  changePhotoButton,
} from "./CreatePostStyled";
import { DeletePostButton } from "~components/DeletePostButton";
import { KeyboardContainer } from "~components/KeyboardContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "~redux/auth/selectors";
import { addPublication } from "~redux/publications/operations";
import { useNavigation } from "@react-navigation/native";

export const CreatePost = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [photoSource, setPhotoSource] = useState(null);
  const [postName, setPostName] = useState("");
  const [location, setLocation] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const { coords } = await Location.getCurrentPositionAsync({});

      dispatch(
        addPublication({
          authorName: name,
          photoURL: photoSource,
          photoName: postName,
          location,
          coords,
        })
      );

      resetForm();
      navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setPhotoSource(null);
    setPostName("");
    setLocation("");
  };

  const shouldLetSubmitForm =
    postName.length > 0 && location.length > 0 && photoSource;

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <KeyboardContainer>
        <View style={createPostContainer}>
          <View>
            <View style={[addPhotoContiner, photoSource && { borderWidth: 0 }]}>
              {photoSource !== null ? (
                <Image source={{ uri: photoSource }} style={selectedPhoto} />
              ) : (
                <Camera style={cameraStyles} type={type} ref={setCameraRef}>
                  <TouchableOpacity
                    style={addPhotoButton}
                    onPress={async () => {
                      if (hasPermission === false) return;

                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        const { id } = await MediaLibrary.createAssetAsync(uri);
                        const { localUri } =
                          await MediaLibrary.getAssetInfoAsync(id);
                        setPhotoSource(localUri);
                      }
                    }}
                  >
                    <SvgXml xml={addPhotoIcon} />
                  </TouchableOpacity>
                </Camera>
              )}
            </View>

            <TouchableOpacity
              style={changePhotoButton}
              onPress={() => setPhotoSource(null)}
            >
              <Text style={addPhotoTextButton}>
                {photoSource ? "Видалити" : "Завантажте"} фото
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              style={[
                publicationInput,
                postName.length > 0 && publicationInputWithText,
                focusedInput === "postName" && publicationInputFocused,
              ]}
              onFocus={() => setFocusedInput("postName")}
              onBlur={() => setFocusedInput(null)}
              onChangeText={setPostName}
              value={postName}
              placeholder="Назва..."
            />

            <View style={{ position: "relative" }}>
              <TextInput
                style={[
                  locationInput,
                  focusedInput === "location" && publicationInputFocused,
                ]}
                onFocus={() => setFocusedInput("location")}
                onBlur={() => setFocusedInput(null)}
                onChangeText={setLocation}
                value={location}
                placeholder="Місцевість..."
              />
              <SvgXml xml={addLocationIcon} style={locationIcon} />
            </View>
            <TouchableOpacity
              style={[
                submitButtonDisabled,
                shouldLetSubmitForm && submitButtonActive,
                isSubmitting && submitButtonDisabled,
              ]}
              onPress={handleSubmit}
            >
              <Text
                style={[
                  submitTextDisabled,
                  shouldLetSubmitForm && submitTextActive,
                  isSubmitting && submitTextDisabled,
                ]}
              >
                Опубліковати
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardContainer>
      <DeletePostButton callback={resetForm} />
    </>
  );
};
