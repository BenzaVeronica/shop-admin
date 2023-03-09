import { userListReducer, userLoginReducer, userStatisticsReducer } from './User/UserReducers';
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListReducer,
  productUpdateReducer,
} from './Product/ProductReducers';
import {
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
} from './Order/OrderReducres';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
  userStatistics: userStatisticsReducer,
});

export default rootReducer;
