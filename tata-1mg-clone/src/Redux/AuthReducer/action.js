import {
  USER_REQUEST,
  USER_FAILURE,
  USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./actionType";
import axios from "axios";
export const CreateUser = (data) => (dispatch) => {
  dispatch({ type: USER_REQUEST });
  return axios
    .post(`https://639b03f6d514150197480eef.mockapi.io/user/users`, data)
    .then((res) => {
      // console.log(res);
      dispatch({ type: USER_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: USER_FAILURE });
    });
};

export const userLogin = (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .get(`https://639b03f6d514150197480eef.mockapi.io/user/users`)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      // console.log(res);
    })
    .catch(() => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
