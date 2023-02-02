import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../Hooks/useAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Registration from '../Pages/RegistrationPage/Registration';
import Wrapper from '../components/Wrapper/Wrapper';
import LogIn from '../Pages/LogInPage/LogIn';
import Home from '../Pages/HomePage/Home';

import { refreshUser } from '../Redux/UserAuth/Operations';
import { RestrictedRoute } from '../RedirectedRoutes/RestrictedRoute';
import { PrivateRoute } from '../RedirectedRoutes/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Wrapper />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route
            index
            element={<PrivateRoute component={Home} redirectTo="/logIn" />}
          />
          <Route
            path="registration"
            element={
              <RestrictedRoute component={Registration} redirectTo="/" />
            }
          />
          <Route
            path="logIn"
            element={<RestrictedRoute component={LogIn} redirectTo="/" />}
          />
        </Route>
      </Routes>
      <ToastContainer theme="colored" />
    </>
  );
};

export default App;
