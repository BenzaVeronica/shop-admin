import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/User/UserAsyncRequest';
import { TEXT } from '../data/Constants';

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    $('[data-trigger]').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr('data-trigger');
      $(offcanvas_id).toggleClass('show');
    });

    $('.btn-aside-minimize').on('click', function () {
      if (window.innerWidth < 768) {
        $('body').removeClass('aside-mini');
        $('.navbar-aside').removeClass('show');
      } else {
        // minimize sidebar on desktop
        $('body').toggleClass('aside-mini');
      }
    });
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="main-header navbar">
      {/* Поиск */}
      <div className="col-search">
        {/*   <form className="searchform">
          <div className="input-group">
            <input
              list="search_terms"
              type="text"
              className="form-control"
              placeholder="Search term"
            />
            <button className="btn btn-light bg" type="button">
              <i className="far fa-search"></i>
            </button>
          </div>
          <datalist id="search_terms">
            <option value="Products" />
          </datalist>
        </form>*/}
      </div>
      <div className="col-nav">
        <button className="btn btn-icon btn-mobile me-auto" data-trigger="#offcanvas_aside">
          <i className="md-28 fas fa-bars"></i>
        </button>
        <ul className="nav">
          {/* Смена темы, Смена языка, Уведомления */}
          {/* <li className="nav-item">
            <Link className={`nav-link btn-icon `} title="Dark mode" to="#">
              <i className="fas fa-moon"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-icon" to="#">
              <i className="fas fa-bell"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              English
            </Link>
          </li> */}
          <Link onClick={logoutHandler} to="#">
            {TEXT.logout}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
