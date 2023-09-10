import { StyledFormContainer } from "~components/StyledFormContainer/StyledFormContainer";
import { FormHeader } from "~components/FormHeader/FormHeader";
import { LogInForm } from "~components/LogInForm/LogInForm";

export const LogInScreen = () => {
  return (
    <StyledFormContainer
      whiteBoxHeigth={60}
      whiteBoxTopPadding={33}
      keyboardVerticalOffset={-200}
    >
      <FormHeader>Увійти</FormHeader>

      <LogInForm />
    </StyledFormContainer>
  );
};
