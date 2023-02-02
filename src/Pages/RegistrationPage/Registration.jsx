import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

import { registerNewUser } from '../../Redux/UserAuth/Operations';

import Style from '../LogInPage/style/LogIn.module.css';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const Registration = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handelGetData = data => {
    dispatch(
      registerNewUser({
        name: data.name,
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
        <div className={Style.form__title}>Create Account</div>
        <div className={Style.form__subtitle}>
          Sign in and start managing your contacts!
        </div>
        <RegistrationForm handelGetData={handelGetData} />
      </div>
    </>
  );
};

export default Registration;
