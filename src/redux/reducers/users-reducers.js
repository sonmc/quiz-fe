
import { ACTION_TYPES } from "../actions/actionTypes";

export const initState = {
  message: "",
  data: [],
  status: false
};
const updateUser = (state, data) => {
  let newData = state.data.map((s) => {
    if (s.id === data.id) {
      s.title = data.title;
      s.completed = data.completed
    }
    return s;
  })
  return newData;
}
export const usersReducers = (state = initState, { type, data }) => {
  switch (type) {
    case ACTION_TYPES.GET_SUCCESS:
      return {
        ...state,
        message: "",
        data,
        status: true
      }

    case ACTION_TYPES.CREATE_SUCCESS:
      return {
        ...state,
        message: "Created",
        data: [...state.data, data.data],
        status: true
      }
    case ACTION_TYPES.DELETE_SUCCESS:
      return {
        ...state,
        message: "Deleted",
        data: state.data.filter(t => t.id != data.data),
        status: true
      }

    case ACTION_TYPES.UPDATE_SUCCESS:
      return {
        ...state,
        message: "Updated",
        data: [...updateUser(state, data)],
        status: true
      }
    default:
      return Object.assign({}, state)
  }

}
