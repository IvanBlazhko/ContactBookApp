import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../Hooks/useAuth';

import Style from './style/LogOutBtn.module.css';
import LogOutIMG from './img/Vector.png';

import { userLogOut } from '../../Redux/UserAuth/Operations';
import { toast } from 'react-toastify';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { isLoggedIn, error } = useAuth();

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  useEffect(() => {
    if (!isLoggedIn) {
      redirect('/logIn');
    }
  }, [isLoggedIn, redirect]);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <div className={Style.home__logout} onClick={handleLogOut}>
      <img src={LogOutIMG} alt="LogOutImg" />
    </div>
  );
};

export default LogOutBtn;
