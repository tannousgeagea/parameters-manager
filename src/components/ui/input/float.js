import React from "react";
import './input-style.css'

const FloatInput = ({ name, value, description, onChange }) => {
    return (
        <div className="input-container">
            <label>{name.replace(/_/g, ' ').toUpperCase()}</label>
            <input 
                type="number"
                min="0"
                step="0.01"
                name={name}
                value={value} 
                onChange={(e) => onChange(name, parseFloat(e.target.value))}
            />
        </div>
    )
}

export default FloatInput