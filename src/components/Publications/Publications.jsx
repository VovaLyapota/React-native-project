import { FlatList } from "react-native";
import { PublicationsItem } from "~components/PublicationsItem/PublicationsItem";
import { publications } from "./PublicationsStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectPublications } from "~redux/publications/selectors";
import { fetchPublications } from "~redux/publications/operations";
import { selectUser } from "~redux/auth/selectors";
import { useEffect } from "react";

export const Publications = ({ profile = false }) => {
  const publicationsData = useSelector(selectPublications);
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublications(name));
  }, [name]);

  return (
    <FlatList
      data={publicationsData}
      renderItem={({
        item: {
          authorName,
          postId,
          likes,
          comments,
          postCoords,
          postImage,
          postLocation,
          postName,
        },
      }) => {
        return (
          <PublicationsItem
            profile={profile}
            authorName={authorName}
            postId={postId}
            comments={comments}
            likes={likes}
            postCoords={postCoords}
            postImage={postImage}
            postLocation={postLocation}
            postName={postName}
          />
        );
      }}
      keyExtractor={(post) => {
        return post.postId;
      }}
      style={publications}
    />
  );
};
