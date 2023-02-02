import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../Hooks/useAuth';

import Style from './style/LogIn.module.css';

import { userLogIn } from '../../Redux/UserAuth/Operations';

import LogInForm from '../../components/LogInForm/LogInForm';
import { toast } from 'react-toastify';

const LogIn = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handelGetData = data => {
    dispatch(
      userLogIn({
        email: data.email,
        password: data.password,
      })
    );
  };

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <>
      <div className={Style.form__body}>
        <div className={Style.form__title}>Log in</div>
        <div className={Style.form__subtitle}>
          Sign in and start managing your contacts!
        </div>
        <LogInForm handelGetData={handelGetData} />
      </div>
    </>
  );
};

export default LogIn;
