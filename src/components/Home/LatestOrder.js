import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { TEXT, CURRENCY } from '../../data/Constants';
import Message from '../Common/Error';
import Loading from '../Common/Loading';

const LatestOrder = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className="card-body">
      <h4 className="card-title">{TEXT.order.new}</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order._id}>
                  <td>
                    <b>{order.user.name}</b>
                  </td>
                  <td>{order.user.email}</td>
                  <td>
                    {order.totalPrice} {CURRENCY}
                  </td>
                  <td>
                    {order.isPaid ? (
                      <span className="badge rounded-pill alert-success">
                        {TEXT.order.pay_time} {moment(order.paidAt).format('MMM Do YY')}
                      </span>
                    ) : (
                      <span className="badge rounded-pill alert-danger">{TEXT.order.not_paid}</span>
                    )}
                  </td>
                  <td>{moment(order.createdAt).calendar()}</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/order/${order._id}`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;