import Action from "./index";
import axios from "axios";
import API from "../../api";

const loginStart = () => ({
  type: Action.LOGIN_START
});

export const loginOkay = (userInfo, token) => ({
  type: Action.LOGIN_OKAY,
  payload: { userInfo, token }
});

const loginFail = err => ({
  type: Action.LOGIN_OKAY,
  err
});

const registerStart = () => ({
  type: Action.REGISTER_START
});

const registerOkay = () => ({
  type: Action.REGISTER_OKAY
});

const registerFail = err => ({
  type: Action.REGISTER_FAIL,
  err
});

// async function
//

export const register = userInfo => {
  return async dispatch => {
    try {
      dispatch(registerStart());
      let result = await axios.post(API.register, userInfo);
      //console.log(result.data);
      dispatch(registerOkay());
    } catch (err) {
      //console.log(err.response);
      dispatch(registerFail(err));
    }
  };
};

export const login = userInfo => {
  return async dispatch => {
    //console.log(userInfo);
    try {
      dispatch(loginStart());
      let result = await axios.post(API.login, userInfo);
      const userDetail = result.data.userInfo;
      const token = result.data.token;
      dispatch(loginOkay(userDetail, token));
    } catch (err) {
      console.log(err);
      dispatch(loginFail(err));
    }

    //console.log(result.data);
  };
};
