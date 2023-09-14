import { StyledFormContainer } from "~components/StyledFormContainer/StyledFormContainer";
import { UserPhotoPlaceholder } from "~components/UserPhotoPlaceholder/UserPhotoPlaceholder";
import { FormHeader } from "~components/FormHeader/FormHeader";
import { RegistrationForm } from "~components/RegistrationForm/RegistrationForm";
import { SwitchFormButton } from "~components/SwitchFormButton/SwitchFormButton";

export const RegistrationScreen = () => {
  return (
    <StyledFormContainer whiteBoxHeigth={67} keyboardVerticalOffset={0}>
      <UserPhotoPlaceholder />
      <FormHeader>Реєстрація</FormHeader>
      <RegistrationForm />

      <SwitchFormButton title={"Вже є акаунт? Увійти"} path={"Login"} />
    </StyledFormContainer>
  );
};
