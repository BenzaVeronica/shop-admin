import React, { useEffect } from 'react';
import OrderDetailProducts from './OrderDetailProducts';
import OrderDetailInfo from './OrderDetailInfo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getOrderDetails } from '../../Redux/Order/OrderAsyncRequest';
import Loading from '../Common/Loading';
import Message from '../Common/Error';
import moment from 'moment';
import 'moment/locale/ru';
import { TEXT } from '../../data/Constants';
import { orderDeliverSelector, orderDetailsSelector } from '../../Redux/Order/OrderSelector';
moment.locale('ru');

const OrderDetailmain = ({ orderId }) => {
  const dispatch = useDispatch();

  const orderDetails = useSelector(orderDetailsSelector);
  const { loading, error, order } = orderDetails;

  const orderDeliver = useSelector(orderDeliverSelector);
  const { loading: loadingDelivered, success: successDelivered } = orderDeliver;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successDelivered]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return (
    <section className="content-main">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="card">
          <header className="card-header p-3 Header-green">
            <div className="row align-items-center ">
              <div className="col-lg-6 col-md-6">
                <span>
                  <i className="far fa-calendar-alt mx-2"></i>
                  <b className="text-white">{moment(order.createdAt).format('llll')}</b>
                </span>
                <br />
                <small className="text-white mx-3 ">
                  {TEXT.order.id}: {order._id}
                </small>
              </div>
              <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                <Link className="btn btn-success ms-2" to="#">
                  <i className="fas fa-print"></i>
                </Link>
              </div>
            </div>
          </header>
          <div className="card-body">
            {/* Order info */}
            <OrderDetailInfo order={order} />

            <div className="row">
              <div className="col-lg-9">
                <div className="table-responsive">
                  <OrderDetailProducts order={order} loading={loading} />
                </div>
              </div>
              {/* Payment Info */}
              <div className="col-lg-3">
                <div className="box shadow-sm bg-light">
                  {order.isDelivered ? (
                    <button className="btn btn-success col-12">
                      {TEXT.order.deliv} {moment(order.isDeliveredAt).format('Do MMM YY')}
                    </button>
                  ) : (
                    <>
                      {loadingDelivered && <Loading />}
                      <button onClick={deliverHandler} className="btn btn-dark col-12">
                        {TEXT.order.mark_deliv}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderDetailmain;
