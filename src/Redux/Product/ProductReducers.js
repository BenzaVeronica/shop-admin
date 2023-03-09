import PRODUCT_TYPES from './ProductConstants';

// ALL PRODUCTS
export const productListReducer = (state = { products: [] }, { type, payload }) => {
  switch (type) {
    case PRODUCT_TYPES.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TYPES.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload };
    case PRODUCT_TYPES.PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

// DELETE PRODUCT
export const productDeleteReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case PRODUCT_TYPES.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_TYPES.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_TYPES.PRODUCT_DELETE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

// DELETE PRODUCT
export const productCreateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case PRODUCT_TYPES.PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_TYPES.PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: payload };
    case PRODUCT_TYPES.PRODUCT_CREATE_FAIL:
      return { loading: false, error: payload };
    case PRODUCT_TYPES.PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// EDIT PRODUCT
export const productEditReducer = (state = { product: { reviews: [] } }, { type, payload }) => {
  switch (type) {
    case PRODUCT_TYPES.PRODUCT_EDIT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_TYPES.PRODUCT_EDIT_SUCCESS:
      return { loading: false, product: payload };
    case PRODUCT_TYPES.PRODUCT_EDIT_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

// UPDATE PRODUCT
export const productUpdateReducer = (state = { product: {} }, { type, payload }) => {
  switch (type) {
    case PRODUCT_TYPES.PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_TYPES.PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: payload };
    case PRODUCT_TYPES.PRODUCT_UPDATE_FAIL:
      return { loading: false, error: payload };
    case PRODUCT_TYPES.PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};
