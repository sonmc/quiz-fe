
import React, { useEffect, useState } from "react";
import { ROUTER_NAME } from "../../routers/typeRouter";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES } from "../../redux/actions/actionTypes";
export default function ProductList() {
  const data = useSelector(state => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    data.loginReducers.status = false;
    history.push(ROUTER_NAME.LOGIN_PAGE);
  };

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.GET });
  }, []);
  const update = (user) => {
    console.log(user);
  }
  const remove = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE });
  }
  return (
    <React.Fragment>
      <button onClick={logout}>
        Logout
      </button>
      {
        data.usersReducers.data ?
          <table border="1">
            <thead>
              <tr>
                <th>User Id</th>
                <th>Title</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                data.usersReducers.data.map((item, key) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.completed + ""}</td>
                      <td>
                        <button onClick={() => { update(item) }}>Update</button>
                        <button onClick={() => { remove(item.id) }}>Delete</button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          : ""
      }
    </React.Fragment>
  );
}
