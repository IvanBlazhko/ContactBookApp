import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../Redux/ContactsSlices/ContactSlice';

import Style from './style/ContactForm.module.css';

import FormErrorLabel from '../FormErrorLabel/FormErrorLabel';
import { useAuth } from '../../Hooks/useAuth';

const ContactAddForm = () => {
  const { token } = useAuth();
  const { data: queryContact } = useGetContactsQuery(token);
  const [addContact, { isSuccess }] = useAddContactMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    const newContact = {
      name: data.inputName,
      number: data.inputPhone,
    };
    const isExist = queryContact.find(i => i.name === data.inputName);
    if (isExist) {
      return toast.error(data.inputName + ' is already in contacts');
    }
    addContact(newContact);
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`New contact created`);
    }
  }, [isSuccess]);

  return (
    <div className={Style.form__body}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={Style.form__title}>Add Contact</div>
        <div>
          <FormErrorLabel error={errors?.inputName?.message} />
          <input
            {...register('inputName', {
              required: 'Name is required field',
              minLength: {
                value: 4,
                message: 'Minimum name length 4 letters',
              },
            })}
            className={Style.form__input}
            placeholder="Name"
            type="text"
          />
        </div>
        <div>
          <FormErrorLabel error={errors?.inputPhone?.message} />
          <input
            {...register('inputPhone', {
              required: 'Phone number is required field',
              minLength: {
                value: 12,
                message: 'The minimum length of a phone number is 12 numbers',
              },
              pattern: {
                value: /^[1-9]\d{2}-\d{3}-\d{4}/,
                message:
                  'Please enter valid phone number. Example 444-555-6666',
              },
            })}
            type="phone"
            className={Style.form__input}
            placeholder="Phone"
          />
        </div>
        <button type="submit" className={Style.form__button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactAddForm;
