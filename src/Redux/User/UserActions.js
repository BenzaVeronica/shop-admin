import USER_TYPES from './UserContants';

export const loginRequestAction = () => ({ type: USER_TYPES.USER_LOGIN_REQUEST });
export const loginSuccessAction = (data) => ({
  type: USER_TYPES.USER_LOGIN_SUCCESS,
  payload: data,
});
export const loginErrorAction = (message) => ({
  type: USER_TYPES.USER_LOGIN_FAIL,
  payload: message,
});

export const logoutAction = () => ({ type: USER_TYPES.USER_LOGOUT });
export const listUserResetAction = () => ({ type: USER_TYPES.USER_LIST_RESET });

export const listUserRequestAction = () => ({ type: USER_TYPES.USER_LIST_REQUEST });
export const listUserSuccessAction = (data) => ({
  type: USER_TYPES.USER_LIST_SUCCESS,
  payload: data,
});
export const listUserErrorAction = (message) => ({
  type: USER_TYPES.USER_LIST_FAIL,
  payload: message,
});

export const statUserRequestAction = () => ({ type: USER_TYPES.USER_STAT_REQUEST });
export const statUserSuccessAction = (data) => ({
  type: USER_TYPES.USER_STAT_SUCCESS,
  payload: data,
});
export const statUserErrorAction = (message) => ({
  type: USER_TYPES.USER_STAT_FAIL,
  payload: message,
});
