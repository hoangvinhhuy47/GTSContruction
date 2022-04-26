import { IRoutes } from "assets/typings";
import { PATH } from "common/constants";
import { LangdingPage } from "pages/dashBoard/LandingPage/landingpage";

const landingPagedRoutes: IRoutes = {
  name: "LandingPage",
  path: PATH.LandingPage,
  Element: LangdingPage,
};

export default landingPagedRoutes;
