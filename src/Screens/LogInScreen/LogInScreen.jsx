import { StyledFormContainer } from "~components/StyledFormContainer";
import { FormHeader } from "~components/FormHeader";
import { LogInForm } from "~components/LogInForm";
import { SwitchFormButton } from "~components/SwitchFormButton";

export const LogInScreen = () => {
  return (
    <StyledFormContainer
      whiteBoxHeigth={60}
      whiteBoxTopPadding={33}
      keyboardVerticalOffset={-200}
    >
      <FormHeader>Увійти</FormHeader>

      <LogInForm />
      <SwitchFormButton
        title={"Немає акаунту? Зареєструватися"}
        path={"Registration"}
      />
    </StyledFormContainer>
  );
};
