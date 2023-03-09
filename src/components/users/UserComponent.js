import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUser } from '../../Redux/User/UserAsyncRequest';
import Loading from '../Common/Loading';
import Message from '../Common/Error';
import { TEXT } from '../../data/Constants';
import { userListSelector } from '../../Redux/User/UserSelector';
import userImg from '../../assets/user.png';

const UserComponent = () => {
  const { loading, error, users } = useSelector(userListSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">{TEXT.users}</h2>
        {/* <div>
          <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i> Создать нового
          </Link>
        </div> */}
      </div>
      <div className="card mb-4">
        {/* Card */}
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {users.map((user) => (
                <div className="col" key={user._id}>
                  <div className="card card-user shadow-sm">
                    <div className="card-header">
                      <img className="img-md img-avatar" src={userImg} alt="User pic" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mt-5">{user.name}</h5>
                      <div className="card-text text-muted">
                        {user.isAdmin === true ? (
                          <p className="m-0">{TEXT.roles.admin}</p>
                        ) : (
                          <p className="m-0">{TEXT.roles.customer}</p>
                        )}

                        <p>
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserComponent;
