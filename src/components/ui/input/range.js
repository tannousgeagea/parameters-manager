import React from "react";
import './input-style.css'

const RangeInput = ({ name, value, description, metaInfo, onChange }) => {
    return (
        <div className="input-container">
            <label>{name.replace(/_/g, ' ').toUpperCase()}</label>
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