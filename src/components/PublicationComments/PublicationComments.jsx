import { FlatList } from "react-native";
import { PublicationCommentItem } from "~components/PublicationCommentItem/PublicationCommentItem";
import { publicationCommentsContainer } from "./PublicationCommentsStyles";

export const PublicationComments = ({ comments }) => {
  return (
    <FlatList
      data={comments}
      renderItem={({
        item: { comentatorName, comentatorPhoto, message, time },
      }) => (
        <PublicationCommentItem
          comentatorName={comentatorName}
          comentatorPhoto={comentatorPhoto}
          message={message}
          time={time}
        />
      )}
      keyExtractor={(_, index) => index}
      style={publicationCommentsContainer}
    />
  );
};
