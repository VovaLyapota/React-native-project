import { FlatList } from "react-native";
import { PublicationsItem } from "~components/PublicationsItem/PublicationsItem";
import { publications } from "./PublicationsStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectPublications } from "~redux/publications/selectors";
import { fetchPublications } from "~redux/publications/operations";
import { selectToken } from "~redux/auth/selectors";
import { useEffect } from "react";

export const Publications = ({ profile = false }) => {
  const publicationsData = useSelector(selectPublications);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublications(token));
  }, [token]);

  return (
    <FlatList
      data={publicationsData}
      renderItem={({
        item: {
          comments,
          likes,
          postCoords,
          postImage,
          postLocation,
          postName,
        },
      }) => {
        return (
          <PublicationsItem
            profile={profile}
            comments={comments}
            likes={likes}
            postCoords={postCoords}
            postImage={postImage}
            postLocation={postLocation}
            postName={postName}
          />
        );
      }}
      keyExtractor={(post) => post.postName}
      style={publications}
    />
  );
};
