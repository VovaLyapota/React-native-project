import { StyledFormContainer } from "~components/StyledFormContainer/StyledFormContainer";
import { UserPhotoPlaceholder } from "~components/UserPhotoPlaceholder/UserPhotoPlaceholder";
import { FormHeader } from "~components/FormHeader/FormHeader";
import { RegistrationForm } from "~components/RegistrationForm/RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <StyledFormContainer whiteBoxHeigth={67}>
      <UserPhotoPlaceholder />

      <FormHeader>Реєстрація</FormHeader>

      <RegistrationForm />
    </StyledFormContainer>
  );
};
