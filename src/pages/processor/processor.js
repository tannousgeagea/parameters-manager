import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch-data";
import { useParams } from "react-router-dom";
import ProjectCard from "../../components/ui/card/service-card";
import ProcessorDetails from "../../components/ui/common/processor-details";
import '../style.css'
import '../service/service.css'

const ProcessorPage = () => {
  const { processorName } = useParams();
  const { data, loading, error } = useFetchData(`/api/v1/processor/group/${processorName}`)
  const [showDetails, setShowDetails] = useState(false)
  const [index, setIndex] = useState(null)

  const handleClick = (idx) => {
    // Toggle the display of the details
    setShowDetails(true);
    setIndex(idx)

  };

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error loading data</p>

  return (
      <div className="app-container">
        <div className="app-content">
  
          <div className='app-header'>
              <div className="section-title">
                  {/* <img src={DatasetIcon} className="header-icon"></img> */}
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

            {showDetails &&
              <div>
                <ProcessorDetails data={data[index]}/>
              </div>
            }

          </div>
        </div>
      </div>
    );
  };

export default ProcessorPage