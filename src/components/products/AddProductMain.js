import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct } from './../../Redux/Product/ProductAsyncRequest';
import Toast from '../Common/Toast';
import Message from '../Common/Error';
import Loading from '../Common/Loading';
import { TEXT, TOASTOBJECTS } from '../../data/Constants';
import { productCreateSelector } from '../../Redux/Product/ProductSelector';
import { createProductResetAction } from '../../Redux/Product/ProductActions';

const AddProductMain = () => {
  const [inputs, setInputs] = useState({});
  const { name, price, description, image, countInStock } = inputs;

  const handleSettings = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  let history = useHistory();
  const { loading, error, product, success } = useSelector(productCreateSelector);

  useEffect(() => {
    if (product) {
      toast.success(TEXT.tips.add, TOASTOBJECTS);
      dispatch(createProductResetAction());
      setInputs({});
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(name, price, description, image, countInStock));
  };

  useEffect(() => {
    if (success) {
      history.push('/products');
    }
  }, [product, history]);

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: '1200px' }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            {/* <Link to="/products" className="btn btn-danger text-white">
              Товары
            </Link> */}
            <h2 className="content-title">{TEXT.forms.add_title}</h2>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
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
                      name="name"
                      onChange={handleSettings}
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
                      name="price"
                      onChange={handleSettings}
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
                      name="countInStock"
                      onChange={handleSettings}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">{TEXT.product.desc}</label>
                    <textarea
                      placeholder={TEXT.placeholder}
                      className="form-control"
                      type="text"
                      rows="7"
                      required
                      value={description}
                      name="description"
                      onChange={handleSettings}></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">{TEXT.product.img}</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={`URL`}
                      value={image}
                      name="image"
                      required
                      onChange={handleSettings}
                      //   onChange={(e) => setImage(e.target.value)}
                    />
                    {/* <input className="form-control mt-3" type="file" /> */}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  {TEXT.btns.add}
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
