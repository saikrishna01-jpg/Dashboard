import Icon from '@mdi/react'
import { mdiAccountBox, mdiPencil, mdiMapMarker, mdiBriefcaseClock, mdiLinkVariant, mdiFormatQuoteOpen, mdiEmail, mdiPhone, mdiInstagram, mdiFacebook, mdiTwitter,mdiWeb, mdiPh } from '@mdi/js'
import {React, useState} from 'react'
import Form from './Form';

function Card(props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    var icons=""
    const iconArray = [mdiInstagram, mdiFacebook, mdiTwitter,mdiWeb]

    if(props.icons!=null){
        icons = iconArray.map((icon)=>{
            return (
                <Icon path={icon} size={1.5} color="#C3C3C3"/>
            )
        })
    }

    return (
        <div className='card'>
            <div className='card-title'>
                <Icon path={props.icon} size={1} color="#C3C3C3"></Icon>
                <span className='card-title-text'>{props.title}</span>
                <div className='edit-btn' onClick={togglePopup}>
                    <Icon className='edit-btn' path={mdiPencil} size={0.8} color="red">
                </Icon>
                </div>
            </div>
            
            <div className='card-content'>
                <Icon path={props.emailIcon} size={1} color="#C3C3C3"/>
                {props.emails!=null && 
                    <span className='card-content-text'>{props.emails[0]} / {props.emails[1]}</span>
                }
                <span className='card-content-text'>{props.content}</span>
                {icons}

                {(props.count>1) && 
                <div className='count-div'>
                    <span className='count'>+{props.count}</span>
                </div> }
            </div>
            <div className='card-content'>
                <Icon path={props.phoenIcon} size={1} color="#C3C3C3"/>
                {props.phones!=null && <span className='card-content-text'>{props.phones[0]} /<br></br>{props.phones[1]}</span>}
            </div>
            <Form isOpen={isOpen} togglePopup={togglePopup} id={props.title} />
        </div>
    )
}

export default function Cards() {

    const data = JSON.parse(localStorage.getItem("data"))

  return (
    <div className='cards'>
        <Card 
            icon={mdiAccountBox}
            title="Contact"
            emails={data[0]["Contact"][0]["email"]}
            phones={data[0]["Contact"][0]["phone"]}
            emailIcon={mdiEmail}
            phoenIcon={mdiPhone}
            count={data[0]["Contact"][0]["email"].length}
        />
        <Card 
            icon={mdiMapMarker}
            title="Address"
            content={data[1]["Address"]}
            count={Object.keys(data[1]).length}
        />
        <Card 
            icon={mdiBriefcaseClock}
            title="House of Operations"
            content={data[2]["House of Operations"]}
            count={Object.keys(data[2]).length}
        />
        <Card 
            icon={mdiLinkVariant}
            title="Social Media & Links"
            icons={data[3]["Social"]}
            count={Object.keys(data[2]).length}
        />
        <Card 
            icon={mdiFormatQuoteOpen}
            title="Statement"
            content={data[4]["Statement"]}
            count={Object.keys(data[2]).length}
        />
    </div>
  )
}
