import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getFilter } from '../../Redux/ContactsSlices/selectors';
import { toast } from 'react-toastify';

import { getVisibleContacts } from './getVisibleContacts';
import { ContactsItem } from './ContactsItem';

import MoonLoader from 'react-spinners/ClipLoader';

import Style from './style/Contacts.module.css';
import picture from './img/startPicture.png';
import { useGetContactsQuery } from '../../Redux/ContactsSlices/ContactSlice';
import { useAuth } from '../../Hooks/useAuth';

export const PhonebookContacts = () => {
  const { token } = useAuth();
  const {
    data: queryContact,
    error: queryContactError,
    isFetching: queryContactFetching,
  } = useGetContactsQuery(token);

  const search = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(queryContact, search);

  useEffect(() => {
    if (queryContactError) {
      toast.error(
        'Sorry, something went wrong! Please reload the page or try again.'
      );
    }
  }, [queryContactError]);

  return (
    <div>
      <div className={Style.contacts__body}>
        {queryContactFetching && (
          <div className={Style.contact__spinner}>
            <MoonLoader color="#fff" size={100} />
          </div>
        )}
        {queryContact?.length === 0 && (
          <div className={Style.contact__start}>
            The contact book is empty... To get started, add an entry to the
            contact book!
            <div className={Style.contact__picture}>
              <img src={picture} alt="Start img" />
            </div>
          </div>
        )}
        {visibleContacts?.length === 0 ? (
          <div className={Style.contact__start}>
            Contact with this name does not exist !
            <div className={Style.contact__picture}>
              <img src={picture} alt="Start img" />
            </div>
          </div>
        ) : (
          visibleContacts.map(({ name, id, number }) => (
            <ContactsItem name={name} key={id} id={id} phone={number} />
          ))
        )}
      </div>
    </div>
  );
};

export default PhonebookContacts;
