import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import data from '../Data.json'


export default function EditContactForm(props) {

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState(props.title)
  const jsonFile = JSON.parse(localStorage.getItem("data"))
  const contactObject = jsonFile[0]["Contact"]

  const obj = contactObject.find((item) => item.name == value)
  

  function pushEmail(event) {
    obj["email"].push(email)
    localStorage.setItem("data",JSON.stringify(jsonFile))
    setEmail('')
  }

  function pushPhone(event) {
    obj["phone"].push(phone)
    localStorage.setItem("data",JSON.stringify(jsonFile))
    setPhone('')
  }

  return (
    <div className={`popup ${props.isOpen ? 'open' : ''}`}>
      <div className='content'>
        <span onClick={props.togglePopup}>
            <Icon className='back-arrow' path={mdiArrowLeft} size={1.5} ></Icon>
        </span>
        <h1>Contacts</h1>
        <p>Please provide the company's email & contacts</p>
        <form action="">
          <span>Email Id</span>
          <input type="text" id='email' placeholder='eg. salesteam@br.in' onChange={(e) => setEmail(e.target.value)}/>
          <button onClick={pushEmail} className='add-btn'>Add More</button>
          
          <span>Contact Number</span>
          <input type="text" id='phone' placeholder='eg. 8511591740' onChange={(e) => setPhone(e.target.value)}/>
          <button onClick={pushPhone} className='add-btn'>Add More</button>
        </form> 
      </div>
    </div>
  )
}

/*
jsonFile[0]["Contact"]=[
    {
        "name":"Sales Team",
        "email": [],
        "phone": []
    },
    {
        "name":"Marketing Team",
        "email": [],
        "phone": []
    },
    {
        "name":"Dev Team",
        "email": [],
        "phone": []
    }]
    localStorage.setItem("data",JSON.stringify(jsonFile))*/