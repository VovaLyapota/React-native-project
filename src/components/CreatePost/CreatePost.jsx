import { useState } from "react";
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
} from "./CreatePostStyled";
import { DeletePostButton } from "~components/DeletePostButton/DeletePostButton";
import { KeyboardContainer } from "~components/KeyboardContainer/KeyboardContainer";
const postImg = require("~images/fakePublicationPhoto.jpg");

export const CreatePost = () => {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const shouldLetSubmitForm = name.length > 0 && location.length > 0 && photo;

  return (
    <>
      <KeyboardContainer>
        <View style={createPostContainer}>
          <View>
            <View style={[addPhotoContiner, photo && { borderWidth: 0 }]}>
              {photo ? (
                <Image source={postImg} style={selectedPhoto} />
              ) : (
                <TouchableOpacity
                  style={addPhotoButton}
                  onPress={() => setPhoto(true)}
                >
                  <SvgXml xml={addPhotoIcon} />
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity style={{ marginBottom: 32 }}>
              <Text style={addPhotoTextButton}>
                {photo ? "Змініть" : "Завантажте"} фото
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              style={[
                publicationInput,
                name.length > 0 && publicationInputWithText,
                focusedInput === "name" && publicationInputFocused,
              ]}
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
              onChangeText={setName}
              value={name}
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
              ]}
            >
              <Text
                style={[
                  submitTextDisabled,
                  shouldLetSubmitForm && submitTextActive,
                ]}
              >
                Опубліковати
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardContainer>
      <DeletePostButton />
    </>
  );
};
