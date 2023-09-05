import { BasicContainer } from "~components/BasicContainer/BasicContainer";
import { HomeHeader } from "~components/HomeHeader/HomeHeader";
import { HomeUser } from "~components/HomeUser/HomeUser";
import { Publications } from "~components/Publications/Publications";

export const Home = () => {
  return (
    <BasicContainer>
      <HomeHeader />
      <HomeUser />
      <Publications />
    </BasicContainer>
  );
};
