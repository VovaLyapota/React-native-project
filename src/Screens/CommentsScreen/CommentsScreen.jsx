import { BasicContainer } from "~components/BasicContainer/BasicContainer";
import { CommentInput } from "~components/CommentInput/CommentInput";
import { DiscussedPhoto } from "~components/DiscusedPhoto/DiscussedPhoto";
import { KeyboardContainer } from "~components/KeyboardContainer/KeyboardContainer";
import { PublicationComments } from "~components/PublicationComments/PublicationComments";

export const CommentsScreen = () => {
  return (
    <BasicContainer>
      <DiscussedPhoto />
      <PublicationComments />
      <KeyboardContainer keyboardVerticalOffset={80}>
        <CommentInput />
      </KeyboardContainer>
    </BasicContainer>
  );
};
