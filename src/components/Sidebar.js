import {React} from 'react'
import { NavLink, useMatch } from "react-router-dom"
import {mdiAccountBox, mdiHelpCircle,mdiAccountMultiple , mdiBriefcaseClock , mdiCashMultiple , mdiChatQuestion, mdiCubeOutline , mdiFormatQuoteOpen, mdiHandshake, mdiInformation, mdiLinkVariant, mdiMail, mdiMapMarker, mdiPackageVariantClosed, mdiPencil, mdiPhone, mdiTrophy,  mdiViewDashboard} from '@mdi/js';
import Icon from '@mdi/react';


export default function Sidebar() {

  return (
    <div className='sidebar'>
      <div className='logo-name'>
        <img className='logo2' src="/logo.png" width="40px" alt=""/>
        <span>A. T. Inks</span>
      </div>
      <div className='sidebar-ul'>
        <NavLink to="/dashboard"> <Icon className='icon-sidebar' path={mdiViewDashboard} size={1}></Icon><span className='sidebar-txt'>Dashboard</span></NavLink>
        <NavLink to="/orders"> <Icon className='icon-sidebar' path={mdiPackageVariantClosed} size={1}></Icon><span className='sidebar-txt'>Orders</span></NavLink>
        <NavLink to="/team"> <Icon className='icon-sidebar' path={mdiAccountMultiple} size={1}></Icon><span className='sidebar-txt'>Team Members</span></NavLink>
        <NavLink to="/partners"> <Icon className='icon-sidebar' path={mdiHandshake} size={1}></Icon><span className='sidebar-txt'>Partners</span></NavLink>
        <NavLink to="/listings"> <Icon className='icon-sidebar' path={mdiCubeOutline} size={1}></Icon><span className='sidebar-txt'>Product Listings</span></NavLink>
        <NavLink to="/awards"> <Icon className='icon-sidebar' path={mdiTrophy} size={1}></Icon><span className='sidebar-txt'>Awards & Honours</span></NavLink>
        <NavLink to="/about"> <Icon className='icon-sidebar' path={mdiInformation} size={1}></Icon><span className='sidebar-txt'>About Us</span></NavLink>
        <NavLink to="payment"> <Icon className='icon-sidebar' path={mdiCashMultiple} size={1}></Icon><span className='sidebar-txt'>Payment Info</span></NavLink>
      </div>
      <div className='help'>
        <Icon path={mdiHelpCircle} size={2} color="#BABABA" className='help-icon'></Icon>
        <span className='help-txt1'>Need Help?</span>
        <span className='help-txt2'>Our support team is at your disposal.</span>
        <button className='help-btn'>Get Help</button>
      </div>
    </div>
  )
}













