import { BasicContainer } from "~components/BasicContainer";
import { HomeUser } from "~components/HomeUser";
import { Publications } from "~components/Publications";

export const PostsScreen = () => {
  return (
    <BasicContainer>
      <HomeUser />
      <Publications />
    </BasicContainer>
  );
};
