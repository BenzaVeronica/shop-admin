import PRODUCT_TYPES from './ProductConstants';

export const listProductsRequestAction = () => ({ type: PRODUCT_TYPES.PRODUCT_LIST_REQUEST });
export const listProductsSuccessAction = (data) => ({
  type: PRODUCT_TYPES.PRODUCT_LIST_SUCCESS,
  payload: data,
});
export const listProductsErrorAction = (message) => ({
  type: PRODUCT_TYPES.PRODUCT_LIST_FAIL,
  payload: message,
});

export const deleteProductRequestAction = () => ({ type: PRODUCT_TYPES.PRODUCT_DELETE_REQUEST });
export const deleteProductSuccessAction = () => ({
  type: PRODUCT_TYPES.PRODUCT_DELETE_SUCCESS,
});
export const deleteProductErrorAction = (message) => ({
  type: PRODUCT_TYPES.PRODUCT_DELETE_FAIL,
  payload: message,
});

export const createProductRequestAction = () => ({ type: PRODUCT_TYPES.PRODUCT_CREATE_REQUEST });
export const createProductSuccessAction = (data) => ({
  type: PRODUCT_TYPES.PRODUCT_CREATE_SUCCESS,
  payload: data,
});
export const createProductErrorAction = (message) => ({
  type: PRODUCT_TYPES.PRODUCT_CREATE_FAIL,
  payload: message,
});
export const createProductResetAction = () => ({ type: PRODUCT_TYPES.PRODUCT_CREATE_RESET });

export const editProductRequestAction = () => ({ type: PRODUCT_TYPES.PRODUCT_EDIT_REQUEST });
export const editProductSuccessAction = (data) => ({
  type: PRODUCT_TYPES.PRODUCT_EDIT_SUCCESS,
  payload: data,
});
export const editProductErrorAction = (message) => ({
  type: PRODUCT_TYPES.PRODUCT_EDIT_FAIL,
  payload: message,
});

export const updateProductRequestAction = () => ({ type: PRODUCT_TYPES.PRODUCT_UPDATE_REQUEST });
export const updateProductSuccessAction = (data) => ({
  type: PRODUCT_TYPES.PRODUCT_UPDATE_SUCCESS,
  payload: data,
});
export const updateProductErrorAction = (message) => ({
  type: PRODUCT_TYPES.PRODUCT_UPDATE_FAIL,
  payload: message,
});
export const updateProductResetAction = () => ({ type: PRODUCT_TYPES.PRODUCT_UPDATE_RESET });
