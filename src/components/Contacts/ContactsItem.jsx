import React, { useEffect } from 'react';
import { useRemoveByIdMutation } from '../../Redux/ContactsSlices/ContactSlice';

import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import Style from './style/Contacts.module.css';

export const ContactsItem = ({ name, id, phone }) => {
  const [removeContact, { isLoading, isSuccess }] = useRemoveByIdMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Contact removed`);
    }
  }, [isSuccess]);

  return (
    <div key={id} className={Style.item__contact}>
      <div className={Style.item__name}>
        <h3>Name</h3>
        <div>{name}</div>
      </div>
      <div className={Style.item__phone}>
        <h3>Phone</h3>
        <div>{phone}</div>
      </div>
      <button
        type="button"
        onClick={() => removeContact(id)}
        className={Style.contact__remove_btn}
      >
        {isLoading ? <BeatLoader color="#fff" size={15} /> : 'Del'}
      </button>
    </div>
  );
};
export default ContactsItem;
