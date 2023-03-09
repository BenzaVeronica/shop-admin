import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENCY, TEXT } from '../../data/Constants';
import addDecimals from '../../utils/addDecimals';

const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  if (!loading) {
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    );
  }

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: '40%' }}>{TEXT.order.product}</th>
          <th style={{ width: '20%' }}>{TEXT.order.price}</th>
          <th style={{ width: '20%' }}>{TEXT.order.qty}</th>
          <th style={{ width: '20%' }} className="text-end">
            {TEXT.order.total}
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '40px', height: '40px' }}
                    className="img-xs"
                  />
                </div>
                <div className="info">{item.name}</div>
              </Link>
            </td>
            <td>
              {item.price} {CURRENCY}
            </td>
            <td>{item.qty} </td>
            <td className="text-end">
              {item.qty * item.price} {CURRENCY}
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>{TEXT.order.subtotal}:</dt>{' '}
                <dd>
                  {order.itemsPrice} {CURRENCY}
                </dd>
              </dl>
              <dl className="dlist">
                <dt>{TEXT.order.shipping_cost}:</dt>{' '}
                <dd>
                  {order.shippingPrice} {CURRENCY}
                </dd>
              </dl>
              <dl className="dlist">
                <dt>{TEXT.order.grand_total}:</dt>
                <dd>
                  <b className="h5">
                    {order.totalPrice} {CURRENCY}
                  </b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">{TEXT.order.status}:</dt>
                <dd className="pay">
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      {TEXT.order.paid}
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      {TEXT.order.not_paid}
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
