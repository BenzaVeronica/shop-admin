import Chart from '../Common/Chart';
import React, { useEffect, useMemo, useState } from 'react';
import { TEXT } from '../../data/Constants';
import { useSelector } from 'react-redux';
import Loading from '../Common/Loading';
import Message from '../Common/Error';
import { userStatisticsSelector } from '../../Redux/User/UserSelector';

const UsersStatistics = () => {
  const { loading, error, statistics } = useSelector(userStatisticsSelector);

  const MONTHS = useMemo(
    () => ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    [],
  );

  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    statistics &&
      statistics.map((item) =>
        setUserStats((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], [TEXT.statistics.active_user]: item.total },
        ]),
      );
  }, [statistics]);

  return (
    <div className="card-body ">
      <h4 className="chartTitle">{TEXT.statistics.users}</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <Chart data={userStats} grid dataKey={TEXT.statistics.active_user} />
      )}
    </div>
  );
};

export default UsersStatistics;
