import {React, useState} from 'react'
import { mdiArrowLeft, mdiPencil,mdiEmail, mdiAccountBox, mdiPhone, mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
import EditContactForm from './EditContactForm';

function Card(props) {
  const [edit, setEdit] = useState(false);
  function ToggleEdit() {
    setEdit(!edit)
  }

  const [value, setValue] = useState(props.name)
  const jsonFile = JSON.parse(localStorage.getItem("data"))
  const contactObject = jsonFile[0]["Contact"]
  const obj = contactObject.find((item) => item.name == value)

  function deleteArray(event) {
    obj["email"]=[]
    obj["phone"]=[]
    localStorage.setItem("data",JSON.stringify(jsonFile))
    window.location.reload()
  }

  return (
    <div className='CardInForm'>
      <div className='row-card'>
        <Icon className='CardInFormIcon' path={mdiAccountBox} size={1}></Icon>
        <span className='name'>{props.name}</span>
        <Icon className='delete' path={mdiDelete} size={1} color="red"
        onClick={deleteArray}
        ></Icon>
        <Icon onClick={()=>ToggleEdit()} className='CardInFormIcon' path={mdiPencil} size={1} color="red"></Icon>
      </div>
      <div className='row-card'>
        <Icon className='CardInFormIcon' path={mdiEmail} size={1}></Icon>
        <span className='name'>{props.mails.map((item) => <span>{item} / </span> )}</span>
      </div>
      <div className='row-card'>
        <Icon className='CardInFormIcon' path={mdiPhone} size={1}></Icon>
        <span className='name'>{props.phone.map((item)=> <span className='card-list'>{item} / </span> )}</span>
      </div>
      <EditContactForm isOpen={edit} togglePopup={ToggleEdit} title={props.name}/>
    </div>
  )
}


export default function ContactForm(props) {
  const data = JSON.parse(localStorage.getItem("data"))
  const d = data[0]["Contact"]
    return (
      <div className={`popup ${props.isOpen ? 'open' : ''}`}>
        <div className='content'>
          <span onClick={props.togglePopup}><Icon className='back-arrow' path={mdiArrowLeft} size={1.5}></Icon></span>
          <span className='popup-title'>Contacts</span>
          <p>Please provide the company's email & contacts</p>
          {
            d.map((item, index) => {
              return <Card
               name={item.name} 
               mails={item.email} 
               phone={item.phone}
              />
            })
          }
            
          <button className='save-btn'>Save</button>
        </div>
      </div>
    )
}
