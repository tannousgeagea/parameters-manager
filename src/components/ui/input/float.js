import React from "react";
import './input-style.css'
import infoIcon from '../../../assets/icons/info.png'

const FloatInput = ({ name, value, description, onChange }) => {
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
                type="number"
                min="0"
                step="0.001"
                name={name}
                value={value} 
                onChange={(e) => onChange(name, parseFloat(e.target.value))}
            />
        </div>
    )
}

export default FloatInput