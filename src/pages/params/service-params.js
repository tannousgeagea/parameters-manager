import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch-data";
import ProjectCard from '../../components/ui/card/service-card'
import Spinner from '../../components/ui/animation/spinner'
import '../style.css'
import '../service/service.css'
import paramsIcon from '../../assets/icons/cloud.png'

const ServiceParamsPage = () => {
  const { data: processorData, loading: processorLoading, error: processorError } = useFetchData('/api/v1/processor')

  if (processorError) return <p>Error loading data</p>; 
  // if (processorLoading) return <p>Loading data...</p>; 

  return (
      <div className="app-container">
        <div className="app-content">
  
          <div className='app-header'>
              <div className="section-title">
                  <img src={paramsIcon} alt="param-icon" className="section-title rotateY"></img>
                  <span>Service Parameters</span>
              </div>
          </div>
  
          <div className='processor-content'>
            <div className="processor-section">
              {Object.keys(processorData).map((item, idx) => (
                <Link to={`/params/${item}`} key={idx}>
                  <ProjectCard 
                    project={item.replace("_", " ").toUpperCase()}
                  />
                </Link>
            ))}
            </div>

            {processorLoading && 
              <div className='loading-spinner'>
                <Spinner />
              </div>
            }

          </div>


        </div>
      </div>
    );
  };

export default ServiceParamsPage