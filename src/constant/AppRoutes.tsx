import loadable from "@loadable/component";

import AppPaths from "./AppPaths";

export default [
  {
    path: AppPaths.LOGIN,
    component: loadable(() => import("../components/Auth/Auth"), {}),
  },
  {
    path: AppPaths.LOGIN_2FA,
    component: loadable(() => import("../components/Auth/TwoFA"), {}),
  },
];
