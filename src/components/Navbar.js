import React from 'react'
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';


export default function Navbar() {
  return (
    <div className='nav'>
        <img className='logo' src="/logo.png" alt=""/>
        <input className='search' type="search" placeholder='Search...'/>
        <button className='checkout-btn'><Icon className='cart' size={1} 
        path={mdiCartOutline} ></Icon>Checkout (200)</button>
        <img className='dp' src="potrait.jpg" alt=""/>
        <span>User Admin</span>
        <select className='select' name="" id=""></select>
    </div>
  )
}
