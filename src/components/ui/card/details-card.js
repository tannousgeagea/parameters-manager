import React from 'react';
import './details-card.css'

const DetailsCard = ({ icon, description }) => {

    return (
        <div className='details-card'>
            <img src={icon} alt='icon'/>
            <span>{description}</span>
        </div>
    )
}


export default DetailsCard