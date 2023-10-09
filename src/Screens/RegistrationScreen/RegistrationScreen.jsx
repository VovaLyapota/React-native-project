import { StyledFormContainer } from "~components/StyledFormContainer";
import { UserPhotoPlaceholder } from "~components/UserPhotoPlaceholder";
import { FormHeader } from "~components/FormHeader";
import { RegistrationForm } from "~components/RegistrationForm";
import { SwitchFormButton } from "~components/SwitchFormButton";
import { useState } from "react";
export const RegistrationScreen = () => {
  const [userPhoto, setUserPhoto] = useState(null);

  return (
    <StyledFormContainer whiteBoxHeigth={67} keyboardVerticalOffset={0}>
      <UserPhotoPlaceholder onPhotoChange={(data) => setUserPhoto(data)} />
      <FormHeader>Реєстрація</FormHeader>
      <RegistrationForm userPhotoURL={userPhoto} />

      <SwitchFormButton title="Вже є акаунт? Увійти" path={"Login"} />
    </StyledFormContainer>
  );
};
