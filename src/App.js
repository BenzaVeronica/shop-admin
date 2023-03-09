import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/productScreen';
import OrderScreen from './screens/OrderScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import AddProduct from './screens/AddProduct';
import Login from './screens/LoginScreen';
import UsersScreen from './screens/UsersScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import NotFound from './screens/NotFound';
import PrivateRouter from './components/PrivateRouter';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './Redux/Product/ProductAsyncRequest';
import { listOrders } from './Redux/Order/OrderAsyncRequest';
import { userLoginSelector } from './Redux/User/UserSelector';
import { statUser } from './Redux/User/UserAsyncRequest';

function App() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector(userLoginSelector);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
      dispatch(statUser());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={HomeScreen} exact />
          <PrivateRouter path="/products" component={ProductScreen} />
          <PrivateRouter path="/orders" component={OrderScreen} />
          <PrivateRouter path="/order/:id" component={OrderDetailScreen} />
          <PrivateRouter path="/addproduct" component={AddProduct} />
          <PrivateRouter path="/users" component={UsersScreen} />
          <PrivateRouter path="/product/:id/edit" component={ProductEditScreen} />
          <Route path="/login" component={Login} />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
