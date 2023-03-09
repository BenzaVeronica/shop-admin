import USER_TYPES from './UserContants';

// LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TYPES.USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_TYPES.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_TYPES.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_TYPES.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// ALL USER
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_TYPES.USER_LIST_REQUEST:
      return { loading: true };
    case USER_TYPES.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_TYPES.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_TYPES.USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

// ALL USER
export const userStatisticsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TYPES.USER_STAT_REQUEST:
      return { loading: true };
    case USER_TYPES.USER_STAT_SUCCESS:
      return { loading: false, statistics: action.payload };
    case USER_TYPES.USER_STAT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
