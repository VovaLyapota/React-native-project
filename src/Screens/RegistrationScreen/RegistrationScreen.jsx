import { StyledFormContainer } from "../../components/StyledFormContainer/StyledFormContainer";
import { UserPhotoPlaceholder } from "../../components/UserPhotoPlaceholder/UserPhotoPlaceholder";
import { FormHeader } from "../../components/FormHeader/FormHeader";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <StyledFormContainer>
      <UserPhotoPlaceholder />

      <FormHeader>Реєстрація</FormHeader>

      <RegistrationForm />
    </StyledFormContainer>
  );
};
