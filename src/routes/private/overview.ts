import { IRoutes } from "assets/typings";
import { PATH } from "common/constants";
import { Overview } from "pages/dashBoard";

const ovewViewRoutes: IRoutes = {
  name: "Overview",
  path: PATH.Overview,
  Element: Overview,
};

export default ovewViewRoutes;
