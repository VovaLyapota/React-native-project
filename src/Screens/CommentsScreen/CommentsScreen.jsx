import { BasicContainer } from "~components/BasicContainer/BasicContainer";
import { CommentInput } from "~components/CommentInput/CommentInput";
import { DiscussedPhoto } from "~components/DiscusedPhoto/DiscussedPhoto";
import { HomeHeader } from "~components/HomeHeader/HomeHeader";
import { KeyboardContainer } from "~components/KeyboardContainer/KeyboardContainer";
import { PublicationComments } from "~components/PublicationComments/PublicationComments";

export const CommentsScreen = () => {
  return (
    <KeyboardContainer>
      <BasicContainer>
        <HomeHeader title="Коментарі" />
        <DiscussedPhoto />
        <PublicationComments />
        <CommentInput />
      </BasicContainer>
    </KeyboardContainer>
  );
};
