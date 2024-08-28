import React from "react";
import './input-style.css'
import infoIcon from '../../../assets/icons/info.png'

const RangeInput = ({ name, value, description, metaInfo, onChange }) => {
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
            <div className="range-input ">
                <span>{value}</span>
                <input
                    type="range"
                    name={name}
                    min={metaInfo.min}
                    max={metaInfo.max}
                    step={metaInfo.step}
                    value={value}
                    onChange={(e) => onChange(name, parseFloat(e.target.value))}
                />
            </div>
        </div>
    )
}

export default RangeInput