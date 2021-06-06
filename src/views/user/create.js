
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import "./login.css";
import { ACTION_TYPES } from "../../redux/actions/actionTypes";
import { ROUTER_NAME } from "../../routers/typeRouter";
export default function CreateUser() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSave = (formData) => {
    formData.completed = formData.completed == "on";
    dispatch({ type: ACTION_TYPES.CREATE, data: formData });
    history.push(ROUTER_NAME.USER_LIST);
  }

  return (
    <React.Fragment>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSave)}>
          <div className="container">
            <label htmlFor="uname">
              <b>Id</b>
            </label>
            <input
              type="text"
              placeholder="Enter Id"
              name="id"
              {...register("id", { required: true })}
            />

            <label htmlFor="psw">
              <b>Title</b>
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              name="tilte"
              {...register("title", { required: true })}
            />
            <label htmlFor="psw">
              <b>Completed</b>
            </label>
            <input
              type="radio"
              name="completed"
              {...register("completed", { required: true })}
            />
            <button className="btn-success " type="submit">Save</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
