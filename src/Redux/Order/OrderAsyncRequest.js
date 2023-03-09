import { userRequest } from '../../utils/requestMethods';
import { logout } from '../User/UserAsyncRequest';
import { errorMsg } from '../constants';
import errorHandler from './../../utils/errorHandler';
import {
  listOrdersRequestAction,
  listOrdersSuccessAction,
  listOrdersErrorAction,
  getOrderDetailsRequestAction,
  getOrderDetailsSuccessAction,
  getOrderDetailsErrorAction,
  deliverOrderRequestAction,
  deliverOrderSuccessAction,
  deliverOrderErrorAction,
} from './OrderActions';

export const listOrders = () => async (dispatch) => {
  try {
    dispatch(listOrdersRequestAction());
    const { data } = await userRequest.get(`/api/orders/all`);
    dispatch(listOrdersSuccessAction(data));
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(listOrdersErrorAction(message));
  }
};

// ORDER DETAILS
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch(getOrderDetailsRequestAction());
    const { data } = await userRequest.get(`/api/orders/${id}`);
    dispatch(getOrderDetailsSuccessAction(data));
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(getOrderDetailsErrorAction(message));
  }
};

// ORDER DELIVER
export const deliverOrder = (order) => async (dispatch) => {
  try {
    dispatch(deliverOrderRequestAction());

    const { data } = await userRequest.put(`/api/orders/${order._id}/delivered`, {});
    dispatch(deliverOrderSuccessAction(data));
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(deliverOrderErrorAction(message));
  }
};
