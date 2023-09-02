import { StyledFormContainer } from "../StyledFormContainer/StyledFormContainer";
import { FormHeader } from "../FormHeader/FormHeader";
import { LogInForm } from "../LogInForm/LogInForm";

export const LogIn = () => {
  return (
    <StyledFormContainer formType="log">
      <FormHeader>Увійти</FormHeader>

      <LogInForm />
    </StyledFormContainer>
  );
};
