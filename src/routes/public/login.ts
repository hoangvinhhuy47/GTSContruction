import { IRoutes } from "assets/typings";
import { PATH } from "common/constants";
import { Login } from "pages/Login";

const loginRouter: IRoutes = {
  name: "Login",
  path: PATH.LOGIN,
  Element: Login,
};

export default loginRouter;
