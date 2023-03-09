import ORDER_TYPES from './OrderConstants';

export const listOrdersRequestAction = () => ({ type: ORDER_TYPES.ORDER_LIST_REQUEST });
export const listOrdersSuccessAction = (data) => ({
  type: ORDER_TYPES.ORDER_LIST_SUCCESS,
  payload: data,
});
export const listOrdersErrorAction = (message) => ({
  type: ORDER_TYPES.ORDER_LIST_FAIL,
  payload: message,
});

export const getOrderDetailsRequestAction = () => ({ type: ORDER_TYPES.ORDER_DETAILS_REQUEST });
export const getOrderDetailsSuccessAction = (data) => ({
  type: ORDER_TYPES.ORDER_DETAILS_SUCCESS,
  payload: data,
});
export const getOrderDetailsErrorAction = (message) => ({
  type: ORDER_TYPES.ORDER_DETAILS_FAIL,
  payload: message,
});

export const deliverOrderRequestAction = () => ({ type: ORDER_TYPES.ORDER_DELIVERED_REQUEST });
export const deliverOrderSuccessAction = (data) => ({
  type: ORDER_TYPES.ORDER_DELIVERED_SUCCESS,
  payload: data,
});
export const deliverOrderErrorAction = (message) => ({
  type: ORDER_TYPES.ORDER_DELIVERED_FAIL,
  payload: message,
});
