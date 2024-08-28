import React from 'react';
import './details-card.css'

const DetailsCard = ({ icon, name, description, color, spin }) => {

    return (
        <div className='details-card-container'>
            <div className='details-card-header'>
                <span>{name}</span>
            </div>
            <div className='details-card' style={{ color: color }}>
                <img src={icon} alt='icon' className={spin ? 'spin' : ''}/>
                <span>{description}</span>
            </div>
        </div>
    )
}


export default DetailsCard