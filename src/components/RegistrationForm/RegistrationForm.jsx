import React from 'react';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Style from './style/RegistrationForm.module.css';

import FormErrorLabel from '../FormErrorLabel/FormErrorLabel';

const RegistrationForm = ({ handelGetData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    handelGetData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormErrorLabel error={errors?.name?.message} />
        <input
          {...register('name', {
            required: 'Name is required field',
            minLength: {
              value: 4,
              message: 'Minimum name length 4 letters',
            },
          })}
          className={Style.form__input}
          placeholder="Name"
        />
      </div>
      <div>
        <FormErrorLabel error={errors?.email?.message} />
        <input
          {...register('email', {
            required: 'Email is required field',
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: 'Please enter valid email',
            },
          })}
          type="email"
          className={Style.form__input}
          placeholder="Email"
        />
      </div>
      <div>
        <FormErrorLabel error={errors?.password?.message} />
        <input
          {...register('password', {
            required: 'Password is required field',
            minLength: {
              value: 8,
              message: 'Minimum password length 8 characters',
            },
          })}
          type="password"
          className={Style.form__input}
          placeholder="Password"
        />
      </div>
      <div className={Style.form__link_content}>
        <div className={Style.form__text}>Do you have an account?</div>
        <Link className={Style.form__link} to="/logIn">
          Log in
        </Link>
      </div>
      <button type="submit" className={Style.form__button}>
        Create Account
      </button>
    </form>
  );
};

export default RegistrationForm;
