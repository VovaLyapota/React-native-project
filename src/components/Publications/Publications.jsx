import { FlatList, View } from "react-native";
import { PublicationsItem } from "~components/PublicationsItem/PublicationsItem";
import { publications, publicationsContainer } from "./PublicationsStyles";

const FAKE_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const Publications = () => {
  return (
    <View style={publicationsContainer}>
      <FlatList
        data={FAKE_DATA}
        renderItem={() => <PublicationsItem />}
        keyExtractor={(post) => post.id}
        style={publications}
      />
    </View>
  );
};
