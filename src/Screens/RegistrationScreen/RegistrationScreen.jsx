import { StyledFormContainer } from "~components/StyledFormContainer/StyledFormContainer";
import { UserPhotoPlaceholder } from "~components/UserPhotoPlaceholder/UserPhotoPlaceholder";
import { FormHeader } from "~components/FormHeader/FormHeader";
import { RegistrationForm } from "~components/RegistrationForm/RegistrationForm";
import { SwitchFormButton } from "~components/SwitchFormButton/SwitchFormButton";
import { useState } from "react";
export const RegistrationScreen = () => {
  const [userPhoto, setUserPhoto] = useState(null);

  return (
    <StyledFormContainer whiteBoxHeigth={67} keyboardVerticalOffset={0}>
      <UserPhotoPlaceholder onPhotoChange={(data) => setUserPhoto(data)} />
      <FormHeader>Реєстрація</FormHeader>
      <RegistrationForm userPhotoURL={userPhoto} />

      <SwitchFormButton title={"Вже є акаунт? Увійти"} path={"Login"} />
    </StyledFormContainer>
  );
};
