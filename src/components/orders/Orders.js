import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CURRENCY, TEXT } from '../../data/Constants';

const Orders = (props) => {
  const { orders } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">{TEXT.user.name}</th>
          <th scope="col">{TEXT.user.email}</th>
          <th scope="col">{TEXT.order.total}</th>
          <th scope="col">{TEXT.order.pay}</th>
          <th scope="col">{TEXT.order.date_create}</th>
          <th>{TEXT.order.status}</th>
          <th scope="col" className="text-end">
            {TEXT.detail}
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
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
            <td>{moment(order.createdAt).format('MMM Do YY')}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge btn-success">{TEXT.order.deliv}</span>
              ) : (
                <span className="badge btn-dark">{TEXT.order.not_deliv}</span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
