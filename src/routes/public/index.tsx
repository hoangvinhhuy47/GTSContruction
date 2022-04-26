import type { IRoutes } from "assets/typings";
import homeRoutes from "./home";

import loginRouter from "./login";

export const publicRoutes: IRoutes[] = [loginRouter, homeRoutes];
