import { FlatList } from "react-native";
import { PublicationCommentItem } from "~components/PublicationCommentItem/PublicationCommentItem";
import { publicationCommentsContainer } from "./PublicationCommentsStyles";

const FAKE_DATA = [
  {
    userId: 1,
    message:
      "Really love your most recent photo. I`ve been trying to capture the same thing for a few months and would love some tips!",
    time: "09 червня, 2020 | 08:40",
  },
  {
    userId: 2,
    message:
      "A fast 50mm like f1.8 would help with the bokeh. I`ve been using primes as they tend to get a bit sharper images.",
    time: "09 червня, 2020 | 09:14",
  },
  {
    userId: 1,
    message: "Thank you! That was very helpful!",
    time: "09 червня, 2020 | 09:20",
  },
  {
    userId: 1,
    message:
      "Really love your most recent photo. I`ve been trying to capture the same thing for a few months and would love some tips!",
    time: "09 червня, 2020 | 08:41",
  },
  {
    userId: 2,
    message:
      "A fast 50mm like f1.8 would help with the bokeh. I`ve been using primes as they tend to get a bit sharper images.",
    time: "09 червня, 2020 | 09:12",
  },
  {
    userId: 1,
    message: "Thank you! That was very helpful!",
    time: "09 червня, 2020 | 09:27",
  },
  {
    userId: 1,
    message:
      "Really love your most recent photo. I`ve been trying to capture the same thing for a few months and would love some tips!",
    time: "09 червня, 2020 | 08:49",
  },
  {
    userId: 2,
    message:
      "A fast 50mm like f1.8 would help with the bokeh. I`ve been using primes as they tend to get a bit sharper images.",
    time: "09 червня, 2020 | 09:11",
  },
  {
    userId: 1,
    message: "Thank you! That was very helpful!",
    time: "09 червня, 2020 | 09:29",
  },
];

export const PublicationComments = () => {
  return (
    <FlatList
      data={FAKE_DATA}
      renderItem={({ item }) => (
        <PublicationCommentItem
          userId={item.userId}
          message={item.message}
          time={item.time}
        />
      )}
      keyExtractor={(message) => message.time}
      style={publicationCommentsContainer}
    />
  );
};
