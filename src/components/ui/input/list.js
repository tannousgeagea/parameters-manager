import React from 'react';
import ColorMapping from './color-picker';
import iconDelete from '../../../assets/icons/icons8-delete-64.png';
import './input-style.css'
import infoIcon from '../../../assets/icons/info.png'

const ValueMappings = ({ name, value, description, onChange }) => {  // Use name prop for unique identifier and value from parent

  // Function to handle input changes for minValue and maxValue
  const handleInputChange = (index, field, inputValue) => {
    if (!Array.isArray(value) || typeof value[index] !== 'object') {
      console.error("Invalid value type or structure. Expected an array of objects.");
      return;
    }

    const newMappings = value.map((mapping, i) => 
      i === index ? { ...mapping, [field]: parseFloat(inputValue) } : mapping
    );
    onChange(name, newMappings);
  };

  const addMapping = () => {
    const lastMaxValue = value[value.length - 1]?.maxValue ?? 0;  // Ensure a default value
    const newMappings = [...value, { minValue: lastMaxValue, maxValue: 1, color: '', showColorPicker: false }];
    onChange(name, newMappings);
  };

  const removeMapping = (index) => {
    if (value.length > 1) {
      const newMappings = value.filter((_, i) => i !== index);
      onChange(name, newMappings);
    } else {
      alert('You must have at least one mapping.');
    }
  };

  return (
    <div className='mapping-container'>
      <div className='mapping-content'>
        <div className='mapping-header'>
            <div className="input-label">
                <label>{name.replace(/_/g, ' ').toUpperCase()}</label>
                <div className="info-section">
                    <img src={infoIcon} alt="icon" />
                    <div className="tooltip">
                        <p className="description"><strong>{description}</strong></p>
                    </div>
                </div>
            </div>
          <div className='add-mapping-button' onClick={addMapping}>
              <span>+ Add a new mapping</span>
          </div>
        </div>


        {value.map((mapping, index) => (
          <div key={index} className='mapping-item'>
            <div className='mapping-input'>
              <input
                type="number"
                step="0.01"
                min={index === 0 ? 0 : value[index - 1].maxValue}
                max={mapping.maxValue}
                value={mapping.minValue}
                onChange={(e) => handleInputChange(index, 'minValue', e.target.value)}
              />

              <span> - </span>

              <input
                type="number"
                step="0.01"
                min={mapping.minValue}
                max={index === value.length - 1 ? 1 : value[index + 1].minValue}
                value={mapping.maxValue}
                onChange={(e) => handleInputChange(index, 'maxValue', e.target.value)}
              />
            </div>

            <div className="color-tooltip">
              <ColorMapping
                idx={index}
                mappingColors={value}
                setMappingColors={(newColors) => onChange(name, newColors)}  // Use onChange to update colors
              />
            </div>

            <button type="button" onClick={() => removeMapping(index)} className='remove-button'>
              <img src={iconDelete} alt="delete" />
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ValueMappings;
