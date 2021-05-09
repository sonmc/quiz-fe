import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import LoginScreen from "../views/Authentication/LoginScreen";
import { ROUTER_NAME } from "./typeRouter";
import NotFound from "../views/NotFound";
import RegisterScreen from "../views/Authentication/RegisterScreen";
import HomeScreen from "../views/Containers/HomeScreen";

function RootRouter() {
  return (
    <Switch>
      <Route path={ROUTER_NAME.LOGIN_SCREEN} component={LoginScreen} exact />
      <Route
        path={ROUTER_NAME.REGISTER_SCREEN}
        component={RegisterScreen}
        exact
      />
      <Route path={ROUTER_NAME.HOME_PAGE} component={HomeScreen} exact />
      <Route path={"*"} component={NotFound} exact />
    </Switch>
  );
}

export default RootRouter;
