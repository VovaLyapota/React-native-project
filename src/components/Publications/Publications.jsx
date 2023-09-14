import { FlatList } from "react-native";
import { PublicationsItem } from "~components/PublicationsItem/PublicationsItem";
import { publications } from "./PublicationsStyles";

const FAKE_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const Publications = ({ profile = false }) => {
  return (
    <FlatList
      data={FAKE_DATA}
      renderItem={() => <PublicationsItem profile={profile} />}
      keyExtractor={(post) => post.id}
      style={publications}
    />
  );
};
