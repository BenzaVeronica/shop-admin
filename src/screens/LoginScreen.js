import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Common/Loading';
import Toast from '../components/Common/Toast';
import { TEXT } from '../data/Constants';
import { login } from '../Redux/User/UserAsyncRequest';
import { userLoginSelector } from '../Redux/User/UserSelector';
import Message from './../components/Common/Error';

const Login = ({ history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { error, loading, userInfo } = useSelector(userLoginSelector);

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <Toast />
      <div className="card shadow mx-auto" style={{ maxWidth: '380px', marginTop: '100px' }}>
        <div className="card-body">
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading && <Loading />}
          <h4 className="card-title mb-4 text-center">{TEXT.login}</h4>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <button type="submit" className="btn btn-primary w-100">
                {TEXT.login}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;