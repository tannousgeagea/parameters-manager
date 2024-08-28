import React from "react";
import infoIcon from '../../../assets/icons/info.png'
import './input-style.css'

const TextInput = ({ name, value, description, onChange }) => {
    return (
        <div className="input-container">
            <div className="input-label">
                <label>{name.replace(/_/g, ' ').toUpperCase()}</label>
                <div className="info-section">
                    <img src={infoIcon} alt="icon" />
                    <div className="tooltip">
                        <p className="description"><strong>{description}</strong></p>
                    </div>
                </div>
            </div>
            <input 
                type="text"
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            />
        </div>
    )
}

export default TextInput