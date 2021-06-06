
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import "./login.css";
import { ACTION_TYPES } from "../../redux/actions/actionTypes";
import { ROUTER_NAME } from "../../routers/typeRouter";
export default function UpdateUser() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [formData, setFormData] = useState(
    {
      id: 0,
      title: "",
      completed: false
    }
  )

  useEffect(() => {
    let id = location.state.id;

    let user = data.usersReducers.data.filter(u => u.id === id);

    if (user.length) {
      setFormData((state) => ({
        ...state,
        ...user[0]
      }))
    }


  }, [location.state.id])


  const onSave = () => {
    dispatch({ type: ACTION_TYPES.UPDATE, data: formData });
    history.push(ROUTER_NAME.USER_LIST);
  }
  const _handleChangeForm = (event, name) => {
    setFormData((state) => ({
      ...state,
      [name]: event.target.value
    }))
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
              value={formData.id}
              type="text"
              placeholder="Enter Id"
              name="id"
              onChange={(event) => _handleChangeForm(event, "id")}
            />
            <label htmlFor="psw">
              <b>Title</b>
            </label>
            <input
              value={formData.title}
              type="text"
              placeholder="Enter Title"
              name="tilte"
              onChange={(event) => _handleChangeForm(event, "title")}
            />
            <label htmlFor="psw">
              <b>Completed</b>
            </label>
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={(event) => setFormData((state) => ({
                ...state,
                completed: !formData.completed
              }))}
            />
            <button className="btn-success " type="submit">Save</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
