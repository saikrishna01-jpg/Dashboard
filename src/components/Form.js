import React from 'react'
import { mdiArrowLeft  } from '@mdi/js';
import Icon from '@mdi/react';
import ContactForm from './Forms/ContactPopup';
import AddressForm from './Forms/AddressForm';
import EditContactForm from './Forms/EditContactForm';

export default function Form(props) {

  switch (props.id) {
    case 'Contact':
      return <ContactForm isOpen={props.isOpen} togglePopup={props.togglePopup}/>;
      break;
    case 'Address':
      return <AddressForm isOpen={props.isOpen} togglePopup={props.togglePopup}/>;
  }

}
