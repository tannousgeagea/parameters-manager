import React from 'react';
import './processor-details.css';
import DetailsCard from '../card/details-card';
import { getProcessDetails, getProcessorInfo, getIconSpin, getStatusColor } from '../../../utils/processor/processot-status';

const ProcessorDetails = ({ data }) => {
  const processor = data
  if (!processor) {
    return <p>Processor not found</p>;
  }
  
  return (
    <div className="processor-details">
      
      <div className='processor-header'>
        <h1>{processor.name.replace(/_/g, " ").toUpperCase()}</h1>      
        <div className='processor-command-container'>
          <div className='command'>
            <span>command</span>
          </div>
          <div className='command'>
            <span>log</span>
          </div>
        </div>
      </div>


      <div className="details">
        {Object.keys(processor).map((key) => (
          <DetailsCard 
            icon={getProcessDetails(key, processor)}
            name={key}
            description={getProcessorInfo(key, processor)}
            spin={getIconSpin(`${processor[key]}`)}
            color={getStatusColor(`${processor[key]}`)}
          />
        ))}

      </div>
    </div>
  );
};

export default ProcessorDetails;
