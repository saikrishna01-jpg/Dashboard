import React from 'react'
import { mdiArrowLeft  } from '@mdi/js';
import Icon from '@mdi/react';


export default function AddressForm(props) {
    return (
      <div className={`popup ${props.isOpen ? 'open' : ''}`}>
        <div className='content'>
          <span onClick={props.togglePopup}><Icon className='back-arrow' path={mdiArrowLeft} size={1.5}></Icon></span>
          <h1>Address</h1>
          <form action="">
           <input type="text" placeholder='Floor no/ Block no/ Office Name'/>
           <input type="text" placeholder='Area / Locality'/>
           <input type="text" placeholder='Nearest Landmark'/>
           <input type="text" placeholder='Town / City'/>
           <input type="text" placeholder='City'/>
           <input type="text" placeholder='Pincode'/>
          </form>
        </div>
      </div>
    )
}