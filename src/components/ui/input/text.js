import React from "react";
import './input-style.css'

const TextInput = ({ name, value, description, onChange }) => {
    return (
        <div className="input-container">
            <label>{name.replace(/_/g, ' ').toUpperCase()}</label>
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