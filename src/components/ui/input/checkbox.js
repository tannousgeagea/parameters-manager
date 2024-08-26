import React from "react";
import './input-style.css'

const CheckboxInput = ({ name, value, description, onChange }) => {
    return (
        <div className="input-container">
            <label>{name.replace(/_/g, ' ').toUpperCase()}</label>
                <div className="checkbox-input">
                    {Object.keys(value).map((key) => (
                        <div key={key} className="checkbox-item">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={value[key]}
                                    onChange={(e) => onChange(name, { ...value, [key]: e.target.checked })}
                                />
                                <span>{key.replace(/_/g, ' ').toUpperCase()}</span>
                            </label>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default CheckboxInput