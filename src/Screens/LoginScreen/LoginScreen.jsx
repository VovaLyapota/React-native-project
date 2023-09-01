import { StyledFormContainer } from "../../components/StyledFormContainer/StyledFormContainer";
import { FormHeader } from "../../components/FormHeader/FormHeader";
import { LogInForm } from "../../components/LogInForm/LogInForm";

export const LogInScreen = () => {
  return (
    <StyledFormContainer formType="log">
      <FormHeader>Увійти</FormHeader>

      <LogInForm />
    </StyledFormContainer>
  );
};
