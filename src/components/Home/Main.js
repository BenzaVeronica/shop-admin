import React from 'react';
import TopTotal from './TopTotal';
import LatestOrder from './LatestOrder';
import Statistics from './Statistics';
import UsersStatistics from './UsersStatistics';
import { useSelector } from 'react-redux';
import { TEXT } from '../../data/Constants';
import { orderListSelector } from '../../Redux/Order/OrderSelector';

const Main = () => {
  const orderList = useSelector(orderListSelector);
  const { loading: loadingOrder, error: errorOrder, orders } = orderList;

  const idSale = '63ed5077-0150-4d20-8adb-988f90764994';
  const idProduct = '63ed536e-bba5-4957-8ae3-fd96f0514c0d';

  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> {TEXT.statistics.title} </h2>
        </div>
        <TopTotal orders={orders} />
        <div className="card mb-4 shadow-sm">
          <UsersStatistics />
        </div>
        <div className="row">
          {idSale && (
            <Statistics
              title={TEXT.statistics.sale}
              subtitle={TEXT.statistics.sub_sale}
              id={idSale}
            />
          )}
          {idProduct && (
            <Statistics
              title={TEXT.statistics.products}
              subtitle={TEXT.statistics.sub_products}
              id={idProduct}
            />
          )}
        </div>
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={loadingOrder} error={errorOrder} />
        </div>
      </section>
    </>
  );
};

export default Main;
