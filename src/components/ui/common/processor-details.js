import React from 'react';
import { useParams } from 'react-router-dom';
import './processor-details.css';

import DetailsCard from '../card/details-card';
import runningIcon from '../../../assets/icons/execution.png'
import startTimeIcon from '../../../assets/icons/start.png'
import stopTimeIcon from '../../../assets/icons/stop-watch.png'


const ProcessorDetails = ({ data }) => {

  // Find the processor data by name (assuming 'data' is passed as a prop containing all processors)
  const processor = data

  if (!processor) {
    return <p>Processor not found</p>;
  }

  return (
    <div className="processor-details">
      <h1>{processor.name.replace(/_/g, " ").toUpperCase()}</h1>
      <div className="details">
        {Object.keys(processor).map((key) => (
          <DetailsCard 
            icon={runningIcon}
            description={key}
          />
        ))}

      </div>
    </div>
  );
};

export default ProcessorDetails;
