import React from 'react';
import Message from '../Common/Error';
import Loading from '../Common/Loading';
import Orders from './Orders';
import { useSelector } from 'react-redux';
import { TEXT } from '../../data/Constants';
import { orderListSelector } from '../../Redux/Order/OrderSelector';

const OrderMain = () => {
  const { loading, error, orders } = useSelector(orderListSelector);
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">{TEXT.orders}</h2>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Orders orders={orders} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
