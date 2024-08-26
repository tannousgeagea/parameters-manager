
import React, { useState } from 'react';
import ColorMapping from './color-picker';
import iconDelete from '../../../assets/icons/icons8-delete-64.png'

const ValueMappings = () => {

    const [mappings, setMappings] = useState([
        { minValue: 0, maxValue: 0.5, color: '', showColorPicker: false },
        { minValue: 0.5, maxValue: 1, color: '', showColorPicker: false },
        ]);

  const handleInputChange = (index, field, value) => {
    const newMappings = [...mappings];
    newMappings[index][field] = parseFloat(value);
    setMappings(newMappings);
  };

  const addMapping = () => {
    const lastMaxValue = mappings[mappings.length - 1].maxValue;
    setMappings([...mappings, { minValue: lastMaxValue, maxValue: 1, color: '' }]);
  };

  const removeMapping = (index) => {
    if (mappings.length > 1) {
      const newMappings = mappings.filter((_, i) => i !== index);
      setMappings(newMappings);
    } else {
      alert('You must have at least one mappings.');
    }
  };

  const handleSubmit = () => {
    const values = mappings.map(mapping => mapping.minValue).concat(mappings[mappings.length - 1].maxValue);
    console.log('Mappings:', mappings);
    console.log('Thresholds:', values);
    // Handle form submission
  };

  return (
    <div className='mapping-container'>
        <div className='mapping-content'>
            <h3>Value Mappings</h3>
            {mappings.map((mapping, index) => (
                <div key={index} className='mapping-item'>
                    <div className='mapping-input'>
                        <input
                            type="number"
                            step="0.01"
                            min={index === 0 ? 0 : mappings[index - 1].maxValue}
                            max={mapping.maxValue}
                            value={mapping.minValue}
                            onChange={(e) => handleInputChange(index, 'minValue', e.target.value)}
                        />

                        <span> - </span>
                        
                        <input
                            type="number"
                            step="0.01"
                            min={mapping.minValue}
                            max={index === mappings.length - 1 ? 1 : mappings[index + 1].minValue}
                            value={mapping.maxValue}
                            onChange={(e) => handleInputChange(index, 'maxValue', e.target.value)}
                        />
                    </div>

                    <div>
                        <ColorMapping 
                            idx={index}
                            mappingColors={mappings}
                            setMappingColors={setMappings}
                        />
                    </div>

                    <button type="button" onClick={() => removeMapping(index)} className='remove-button'>
                        <img src={iconDelete} alt="delete" />
                    </button>


                </div>
            ))}
            <button type="button" onClick={addMapping}>
                Add a new mapping
            </button>

        </div>
    </div>
  );
};

export default ValueMappings;
