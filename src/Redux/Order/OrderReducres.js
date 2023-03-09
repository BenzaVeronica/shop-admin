import ORDER_TYPES from './OrderConstants';

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_TYPES.ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_TYPES.ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_TYPES.ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// ORDER DETAILS
export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action,
) => {
  switch (action.type) {
    case ORDER_TYPES.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_TYPES.ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_TYPES.ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// ORDER DELIVERED
export const orderDeliveredReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_TYPES.ORDER_DELIVERED_REQUEST:
      return { loading: true };
    case ORDER_TYPES.ORDER_DELIVERED_SUCCESS:
      return { loading: false, success: true };
    case ORDER_TYPES.ORDER_DELIVERED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
