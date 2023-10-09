import { useState } from "react";
import { useEffect } from "react";
import { BasicContainer } from "~components/BasicContainer";
import { CommentInput } from "~components/CommentInput";
import { DiscussedPhoto } from "~components/DiscussedPhoto";
import { KeyboardContainer } from "~components/KeyboardContainer";
import { PublicationComments } from "~components/PublicationComments";
import {
  addPublicationCommentDB,
  getPublicationCommentsDB,
} from "~firebace/firedatabase";

export const CommentsScreen = ({ route }) => {
  const { authorName, postId, postImage } = route.params;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await getPublicationCommentsDB(authorName, postId);
      setComments(response);
    };
    fetchComments();
  }, []);

  const sendComment = async (comentatorName, comentatorPhoto, comment) => {
    if (comment.trim() === "") return;
    try {
      const newComment = await addPublicationCommentDB(
        postId,
        authorName,
        comentatorName,
        comentatorPhoto,
        comment
      );

      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BasicContainer>
      <DiscussedPhoto imageURI={postImage} />
      <PublicationComments comments={comments} />
      <KeyboardContainer keyboardVerticalOffset={80}>
        <CommentInput sendComment={sendComment} />
      </KeyboardContainer>
    </BasicContainer>
  );
};
