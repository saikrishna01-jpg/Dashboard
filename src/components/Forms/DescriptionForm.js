import {React, useEffect, useState} from 'react'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import data from '../Data.json'


export default function EditContactForm(props) {

  const jsonFile = JSON.parse(localStorage.getItem("data"))

  const [description, setDescription] = useState(jsonFile[5]["description"])
  
  function handleFormSubmit(event) {

    const dataCopy = {...jsonFile}
    dataCopy[5]["description"] = description

    localStorage.setItem("data",JSON.stringify(dataCopy))
    setDescription('')
    window.location.reload()

  }


  return (
    <div className={`popup ${props.isOpen ? 'open' : ''}`}>
      <div className='content'>
        <span onClick={props.togglePopup}>
            <Icon className='back-arrow' path={mdiArrowLeft} size={1.5} ></Icon>
        </span>
        <h1>Edit Description</h1>
        <form >
          <textarea
            className='textarea' 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            >
          </textarea>
        </form> 
        <button onClick={handleFormSubmit} className='save-btn'>Save</button>
      </div>
    </div>
  )  
}
