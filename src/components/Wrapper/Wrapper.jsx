import React from 'react';
import { Outlet } from 'react-router-dom';

import Style from './style/Wrapper.module.css';
import Vectors from './img/Vectors.png';

const Wrapper = () => {
  return (
    <div>
      <div className={Style.wrapper}>
        <img src={Vectors} alt="bg" className={Style.wrapper__img} />
        <Outlet />
      </div>
    </div>
  );
};

export default Wrapper;
