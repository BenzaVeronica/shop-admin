// import { publicRequest, userRequest } from './../../utils/requestMethods';
import { publicRequest, setAuthAxios, userRequest } from './../../utils/requestMethods';
import { errorMsg } from '../constants';
import {
  loginRequestAction,
  loginSuccessAction,
  loginErrorAction,
  logoutAction,
  listUserResetAction,
  listUserRequestAction,
  listUserSuccessAction,
  listUserErrorAction,
  statUserRequestAction,
  statUserSuccessAction,
  statUserErrorAction,
} from './UserActions';
import { toast } from 'react-toastify';
import { TOASTOBJECTS } from '../../data/Constants';
import errorHandler from '../../utils/errorHandler';

// LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequestAction());
    const { data } = await publicRequest.post(`/api/users/login`, { email, password });
    if (!data.isAdmin === true) {
      const err = 'Вы не администратор';
      toast.error(err, TOASTOBJECTS);
      dispatch(loginErrorAction(err));
    } else {
      dispatch(loginSuccessAction(data));
    }
    localStorage.setItem('userInfo', JSON.stringify(data));
    setAuthAxios(data.token);
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(loginErrorAction(message));
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch(logoutAction());
  dispatch(listUserResetAction());
};

// ALL USER
export const listUser = () => async (dispatch) => {
  try {
    dispatch(listUserRequestAction());
    const { data } = await userRequest.get(`/api/users`);
    dispatch(listUserSuccessAction(data));
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }

    dispatch(listUserErrorAction(message));
  }
};

// ALL USER
export const statUser = () => async (dispatch) => {
  try {
    dispatch(statUserRequestAction());
    const { data } = await userRequest.get(`/api/users/stats`);
    dispatch(statUserSuccessAction(data));
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(statUserErrorAction(message));
  }
};
