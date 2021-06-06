
import { put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* getAll() {
  try {
    const response = {
      data: [
        {
          id: 1,
          title: "name 1",
          completed: true
        },
        {
          id: 2,
          title: "name 1",
          completed: false
        }
      ]
    }
    yield put({ type: ACTION_TYPES.GET_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_ERROR, payload: error })
  }
}
function* create(user) {
  try {
    yield put({ type: ACTION_TYPES.CREATE_SUCCESS, data: user });
  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_ERROR, payload: error })
  }
}

function* remove(id) {
  try {
    yield put({ type: ACTION_TYPES.DELETE_SUCCESS, data: id });
  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_ERROR, payload: error })
  }
}
function* update(user) {
  try {
    yield put({ type: ACTION_TYPES.UPDATE_SUCCESS, data: user.data });
  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_ERROR, payload: error })
  }
}
export default function* userSaga() {
  yield takeLatest(ACTION_TYPES.GET, getAll);
  yield takeLatest(ACTION_TYPES.CREATE, create);
  yield takeLatest(ACTION_TYPES.DELETE, remove);
  yield takeLatest(ACTION_TYPES.UPDATE, update);
}
