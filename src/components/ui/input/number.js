import React from "react";
import './input-style.css'

const NumberInput = ({ name, value, description, onChange }) => {
    return (
        <div className="input-container">
            <label>{name.replace(/_/g, ' ').toUpperCase()}</label>
            <input 
                type="number"
                min="0"
                name={name}
                value={value} 
                onChange={(e) => onChange(name, parseFloat(e.target.value))}
            />
        </div>
    )
}

export default NumberInput