import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch-data";
import Spinner from "../../components/ui/animation/spinner";
import ProjectCard from "../../components/ui/card/service-card";
import ProcessorDetails from "../../components/ui/common/processor-details";
import '../style.css'
import './processor.css'
import '../service/service.css'
import closeIcon from '../../assets/icons/close.png'
import processorIcon from '../../assets/icons/capability.png'

const ProcessorPage = () => {
  const { processorName } = useParams();
  const { data, loading, error } = useFetchData(`/api/v1/processor/group/${processorName}`)
  const [showDetails, setShowDetails] = useState(false)
  const [index, setIndex] = useState(null)

  const handleClick = (idx) => {
    setShowDetails(true);
    setIndex(idx)
  };

  const handleClose = () => {
    setShowDetails(false);
    setTimeout(1000);
  }

  if (error) return <p>Error loading data</p>

  return (
      <div className="app-container">
        <div className="app-content">
  
          <div className='app-header'>
              <div className="section-title">
                  <img src={processorIcon} className="section-title spin" alt="processor-icon"></img>
                  <span>Processor: {processorName.replace(/_/g, " ").toUpperCase()}</span>
              </div>
          </div>
  
          <div className='processor-content'>
            <div className="processor-section">
              {data.map((item, idx) => (
                <div key={idx} onClick={() => handleClick(idx)}>
                  <ProjectCard 
                    project={item.name.replace(/_/g, " ").toUpperCase()}
                  />
                </div>
              ))}
            </div>

            {loading && 
              <div className='loading-spinner'>
                <Spinner />
              </div>
            }

            {showDetails &&
              <div className="expanded">
                <div className="close-button" onClick={() => handleClose()}>
                  <img src={closeIcon} />
                </div>
                <ProcessorDetails data={data[index]}/>
                {/* <p>Additional Info</p> */}
              </div>
            }



          </div>
        </div>
      </div>
    );
  };

export default ProcessorPage