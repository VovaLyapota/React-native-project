import { BasicContainer } from "~components/BasicContainer/BasicContainer";
import { HomeUser } from "~components/HomeUser/HomeUser";
import { Publications } from "~components/Publications/Publications";

export const PostsScreen = () => {
  return (
    <BasicContainer>
      <HomeUser />
      <Publications />
    </BasicContainer>
  );
};
