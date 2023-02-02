import React from 'react';

import Style from './style/Home.module.css';

import ContactAddForm from '../../components/ContactAddForm/ContactAddForm';
import FilterInput from '../../components/FilterInput/FilterInput';
import LogOutBtn from '../../components/LogOutBtn/LogOutBtn';
import Contacts from '../../components/Contacts/Contacts';

const Home = () => {
  return (
    <>
      <div className={Style.home__body}>
        <LogOutBtn />
        <div className={Style.home__form}>
          <ContactAddForm />
        </div>
        <div className={Style.home__content}>
          <div className={Style.form__title}>Contacts</div>
          <FilterInput />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default Home;
