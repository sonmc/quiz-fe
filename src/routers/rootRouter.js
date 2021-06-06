import React from "react";
import Login from "../views/user/login";
import { ROUTER_NAME } from "./typeRouter";
import { Route, Switch, Redirect } from "react-router-dom";
import UserList from "../views/user/list";
import CreateUser from "../views/user/create";
import UpdateUser from "../views/user/update";
import ProductList from "../views/product/list";
function RootRouter() {
  return (
    <Switch>
      <Redirect exact from="/" to={ROUTER_NAME.LOGIN_PAGE} />
      <Route path={ROUTER_NAME.LOGIN_PAGE} component={Login} exact />
      <Route path={ROUTER_NAME.USER_LIST} component={UserList} exact />
      <Route path={ROUTER_NAME.PRODUCT_PAGE} component={ProductList} exact />
      <Route path={ROUTER_NAME.CREATE_USER_PAGE} component={CreateUser} exact />
      <Route path={ROUTER_NAME.UPDATE_USER_PAGE} component={UpdateUser} exact />
    </Switch>
  );
}
export default RootRouter;
