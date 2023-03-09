import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../Redux/Product/ProductAsyncRequest';
import { CURRENCY } from '../../data/Constants';
import { TEXT } from '../../data/Constants';

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm(TEXT.tips.delete)) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <>
      <div className="col-md-4 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <div className="img-wrap">
            <img src={product.image} alt="Product" />
          </div>
          <div className="info-wrap">
            <div className="title text-truncate">{product.name}</div>
            <div className="price mb-2">
              {product.price} {CURRENCY}
            </div>
            <div className="row">
              <Link
                to={`/product/${product._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6">
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={() => deletehandler(product._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6">
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
