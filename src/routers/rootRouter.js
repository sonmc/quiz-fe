import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "../views/Authentication/LoginScreen";
import { ROUTER_NAME } from "./typeRouter";
import NotFound from "../views/NotFound";
import RegisterScreen from "../views/Authentication/RegisterScreen";
import HomeScreen from "../views/Containers/HomeScreen";
import Product from "../views/Containers/Product";
import Detail from "../views/Containers/Product/Detail";

function RootRouter() {
  return (
    <Switch>
      <Route path={ROUTER_NAME.LOGIN_SCREEN} component={LoginScreen} exact />
      <Route
        path={ROUTER_NAME.REGISTER_SCREEN}
        component={RegisterScreen}
        exact
      />
      <Route path={ROUTER_NAME.PRODUCT_DETAL} component={Detail} exact />
      <Route path={ROUTER_NAME.LIST_PRODUCT} component={Product} exact />
      <Route path={ROUTER_NAME.HOME_PAGE} component={HomeScreen} exact />
      <Route path={"*"} component={NotFound} exact />


    </Switch>
  );
}

export default RootRouter;
