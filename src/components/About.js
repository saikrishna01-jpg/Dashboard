import {React, useState, useEffect} from 'react'
import Icon from '@mdi/react';
import { mdiCheckDecagram, mdiPencil } from '@mdi/js';
import { NavLink } from 'react-router-dom';
import Cards from './card';
import { Route, Routes } from 'react-router-dom';
import DescriptionForm from './Forms/DescriptionForm.js'

export default function About(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('')

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  const fetchData = () => {
    const jsonData = JSON.parse(localStorage.getItem("data"))
    setDescription(jsonData[5]["description"])

  }
  
  useEffect(() => {
    fetchData()
  },[])

  console.log();
  return (
    <div className='about'>
      <span className='title'>About Us</span>
      <div className='row'>
        <img src="/logo.png" className='logo3' alt=""/>
        <div className='col'>
            <span className='title'>A.T. Inks</span>
            <span className='tag-line'>Digital Inks</span>
        </div>
        <div>
            <Icon className='verified-icon' path={mdiCheckDecagram} size={1} color="gray" />
            <span className='verify-link'>Verify Company</span>
        </div>
      </div>
      <div className='description-row'>
        <p className='description'>{description}</p>
        <Icon onClick={togglePopup} className='edit' path={mdiPencil} size={1 } color="red"  ></Icon> 
      </div>
    
      <div className='nav-about'>
        <NavLink end to="/about">Info</NavLink>
        <NavLink to="/about/faq">FAQ</NavLink>
        <NavLink to="/about/feedback">Complaints and feedback</NavLink>
        <NavLink to="/about/privacy">Privacy Policy</NavLink>
        <NavLink to="/about/terms">Terms and Conditions</NavLink>
      </div>
      <hr className='hr-line'></hr>

      <DescriptionForm isOpen={isOpen} togglePopup={togglePopup} />

      <Routes>
        <Route path="" element={<Cards />} />
        <Route path="faq" element={ <h1>FAQ</h1>} />
        <Route path="feedback" element={ <h1>Complaints and feedback</h1>} />
        <Route path="privacy" element={ <h1>Privacy Policy</h1>} />
        <Route path="terms" element={ <h1>Terms and Conditions</h1>} />
      </Routes>
    </div>
  )
}






















