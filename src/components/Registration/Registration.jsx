import { StyledFormContainer } from "../StyledFormContainer/StyledFormContainer";
import { UserPhotoPlaceholder } from "../UserPhotoPlaceholder/UserPhotoPlaceholder";
import { FormHeader } from "../FormHeader/FormHeader";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const Registration = () => {
  return (
    <StyledFormContainer>
      <UserPhotoPlaceholder />

      <FormHeader>Реєстрація</FormHeader>

      <RegistrationForm />
    </StyledFormContainer>
  );
};
