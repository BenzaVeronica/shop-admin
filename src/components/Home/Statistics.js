import React, { useEffect, useRef, useState } from 'react';
import { TEXT } from '../../data/Constants';
import Message from '../Common/Error';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const Statistics = ({ title, subtitle, id }) => {
  const sdk = new ChartsEmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-shop-bzcxr',
  });
  const chart = sdk.createChart({
    chartId: id,
  });
  const [error, setError] = useState(false);
  const chartEl = useRef(null);
  useEffect(() => {
    async function checkAccess() {
      await fetch(
        `https://us-east-1.aws.data.mongodb-api.com/app/charts-shop-bzcxr/endpoint/bundle_settings`,
      )
        .then()
        .catch((err) => setError(true));
    }
    checkAccess();
  }, [error]);

  useEffect(() => {
    chart.render(chartEl.current).catch((err) => setError(true));
  }, [id]);

  return !error ? (
    <div className="statistics col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-title">{subtitle}</p>
          <div ref={chartEl} style={{ height: 500 }}></div>
        </article>
      </div>
    </div>
  ) : (
    <div style={{ width: '50%' }}>
      <Message variant="alert-danger">
        {title} {TEXT.errors.stat}
      </Message>
    </div>
  );
};

export default Statistics;
