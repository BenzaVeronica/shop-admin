import { userRequest } from '../../utils/requestMethods';
import { logout } from '../User/UserAsyncRequest';
import { errorMsg } from '../constants';
import {
  listProductsRequestAction,
  listProductsSuccessAction,
  listProductsErrorAction,
  deleteProductRequestAction,
  deleteProductSuccessAction,
  deleteProductErrorAction,
  createProductRequestAction,
  createProductSuccessAction,
  createProductErrorAction,
  editProductRequestAction,
  editProductSuccessAction,
  editProductErrorAction,
  updateProductRequestAction,
  updateProductSuccessAction,
  updateProductErrorAction,
} from './ProductActions';
import errorHandler from '../../utils/errorHandler';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(listProductsRequestAction());
    const { data } = await userRequest.get(`/api/products/all`);
    dispatch(listProductsSuccessAction(data.products));
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(listProductsErrorAction(message));
  }
};

// DELETE PRODUCT
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(deleteProductRequestAction());
    await userRequest.delete(`/api/products/${id}`);
    dispatch(deleteProductSuccessAction());
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(deleteProductErrorAction(message));
  }
};

// CREATE PRODUCT
export const createProduct =
  (name, price, description, image, countInStock) => async (dispatch) => {
    try {
      dispatch(createProductRequestAction());
      const { data } = await userRequest.post(`/api/products/`, {
        name,
        price,
        description,
        image,
        countInStock,
      });
      dispatch(createProductSuccessAction(data));
    } catch (error) {
      const message = errorHandler(error);
      if (message === errorMsg) {
        dispatch(logout());
      }
      dispatch(createProductErrorAction(message));
    }
  };

// EDIT PRODUCT
export const editProduct = (id) => async (dispatch) => {
  try {
    dispatch(editProductRequestAction());
    const { data } = await userRequest.get(`/api/products/${id}`);
    dispatch(editProductSuccessAction(data));
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(editProductErrorAction(message));
  }
};

// UPDATE PRODUCT
export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch(updateProductRequestAction());
    const { data } = await userRequest.put(`/api/products/${product._id}`, product);
    dispatch(updateProductSuccessAction(data));
    dispatch(editProductSuccessAction(data));
  } catch (error) {
    const message = errorHandler(error);
    if (message === errorMsg) {
      dispatch(logout());
    }
    dispatch(updateProductErrorAction(message));
  }
};
