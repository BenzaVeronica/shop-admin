import React, { useState, useEffect } from 'react';
import Toast from './../Common/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, updateProduct } from './../../Redux/Product/ProductAsyncRequest';
import { toast } from 'react-toastify';
import Message from '../Common/Error';
import Loading from '../Common/Loading';
import { TEXT, TOASTOBJECTS } from '../../data/Constants';
import { productEditSelector, productUpdateSelector } from '../../Redux/Product/ProductSelector';
import { updateProductResetAction } from '../../Redux/Product/ProductActions';
import { useHistory } from 'react-router-dom';

const EditProductMain = (props) => {
  const { productId } = props;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  let history = useHistory();
  const dispatch = useDispatch();

  const productEdit = useSelector(productEditSelector);
  const { loading, error, product } = productEdit;

  const productUpdate = useSelector(productUpdateSelector);
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch(updateProductResetAction());
      toast.success(TEXT.tips.update, TOASTOBJECTS);
      history.push('/products');
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(editProduct(productId));
      } else {
        setName(product.name);
        setDescription(product.description);
        setCountInStock(product.countInStock);
        setImage(product.image);
        setPrice(product.price);
      }
    }
  }, [product, dispatch, productId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        description,
        image,
        countInStock,
      }),
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: '1200px' }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <h2 className="content-title">{TEXT.forms.update_title}</h2>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && <Message variant="alert-danger">{errorUpdate}</Message>}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          {TEXT.product.title}
                        </label>
                        <input
                          type="text"
                          placeholder={TEXT.placeholder}
                          className="form-control"
                          id="product_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          {TEXT.product.price}
                        </label>
                        <input
                          type="number"
                          placeholder={TEXT.placeholder}
                          className="form-control"
                          id="product_price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          {TEXT.product.stock}
                        </label>
                        <input
                          type="number"
                          placeholder={TEXT.placeholder}
                          className="form-control"
                          id="product_price"
                          required
                          value={countInStock}
                          onChange={(e) => setCountInStock(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">{TEXT.product.desc}</label>
                        <textarea
                          placeholder={TEXT.placeholder}
                          className="form-control"
                          rows="7"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">{TEXT.product.img}</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image}
                          required
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  {TEXT.btns.update}
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
