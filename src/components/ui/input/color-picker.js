import React from "react";
import { useState } from "react";
import { SketchPicker, ChromePicker, BlockPicker, GithubPicker } from 'react-color';
import './input-style.css'

const ColorMapping = ({ idx, mappingColors, setMappingColors }) => {

    const handleColorChange = (index, color) => {
        const newMappings = [...mappingColors];
        newMappings[index].color = color.hex;
        setMappingColors(newMappings);
        newMappings[index].showColorPicker = !newMappings[index].showColorPicker;
      };

      const toggleColorPicker = (index) => {
        const newMappings = [...mappingColors];
        newMappings[index].showColorPicker = !newMappings[index].showColorPicker;
        setMappingColors(newMappings);
        // newMappings[index].showColorPicker = !newMappings[index].showColorPicker;
      };

      const handleClose = (index) => {
        const newMappings = [...mappingColors];
        newMappings[index].showColorPicker = !newMappings[index].showColorPicker;
      }

    return (
        <div>
            {mappingColors[idx].showColorPicker ? (
                <div key={idx}>
                    <GithubPicker
                        color={mappingColors[idx].color}
                        onChangeComplete={(newColor) => handleColorChange(idx, newColor)}
                    />
                </div>
                ) : (
                <button onClick={() => toggleColorPicker(idx)} className="color-input">
                    {mappingColors[idx].color ? (
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: mappingColors[idx].color,
                            }}
                        />
                    ) : (
                        <span>set Color</span>
                    )}
                </button>
            )}
        </div>
    )
}

export default ColorMapping