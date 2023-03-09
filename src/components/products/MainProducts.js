import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Redux/Product/ProductAsyncRequest';
import Loading from '../Common/Loading';
import Message from '../Common/Error';
import { TEXT } from '../../data/Constants';
import { productDeleteSelector, productListSelector } from '../../Redux/Product/ProductSelector';

const MainProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector(productListSelector);
  const { loading, error, products } = productList;

  const productDelete = useSelector(productDeleteSelector);
  const { error: errorDelete, success: successDelete } = productDelete;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">{TEXT.products}</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            {TEXT.btns.create}
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          {errorDelete && <Message variant="alert-danger">{errorDelete}</Message>}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Products */}
              {products.length &&
                products.map((product) => <Product product={product} key={product._id} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
