import PropTypes from "prop-types";
import { BackgroundContainer } from "~components/BackgroundContainer";
import { KeyboardContainer } from "~components/KeyboardContainer";

export const StyledFormContainer = ({
  whiteBoxHeigth,
  whiteBoxTopPadding = 0,
  keyboardVerticalOffset = 50,
  children,
}) => {
  return (
    <KeyboardContainer keyboardVerticalOffset={keyboardVerticalOffset}>
      <BackgroundContainer
        whiteBoxHeigth={whiteBoxHeigth}
        whiteBoxTopPadding={whiteBoxTopPadding}
      >
        {children}
      </BackgroundContainer>
    </KeyboardContainer>
  );
};

StyledFormContainer.propTypes = {
  whiteBoxHeigth: PropTypes.number,
  whiteBoxTopPadding: PropTypes.number,
  keyboardVerticalOffset: PropTypes.number,
};
