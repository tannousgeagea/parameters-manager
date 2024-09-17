import React from 'react';
import infoIcon from '../../../assets/icons/info.png'

const SelectInput = ({ name, value, description, options, onChange }) => {
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
        <div className="select-input">
            <select
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            >
                {options.map((option, idx) => (
                <option key={idx} value={option.value}>
                    {option}
                </option>
                ))}
            </select>
        </div>

    </div>
  );
};

export default SelectInput;