import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch-data";
import Spinner from "../../components/ui/animation/spinner";
import ProjectCard from '../../components/ui/card/service-card'
import serviceIcon from '../../assets/icons/technical-support.png'
import '../style.css'

const ServicePage = () => {

  const { data, loading, error } = useFetchData('/api/v1/processor')
  
  if (error) return <p>Error ...</p>

  return (
      <div className="app-container">
        <div className="app-content">
  
          <div className='app-header'>
              <div className="section-title">
                  <img src={serviceIcon} alt="service-icon" class="section-title spin"/>
                  <span>Services</span>
              </div>
          </div>
  
          <div className='processor-content'>
            <div className="processor-section">
              {Object.keys(data).map((item, idx) => (
                <Link to={`/services/${item}`} key={idx}>
                  <ProjectCard 
                    project={item.replace("_", " ").toUpperCase()}
                  />
                </Link>
              ))}
            </div>
            {loading && 
              <div className='loading-spinner'>
                <Spinner />
              </div>
            }
          </div>
        </div>
      </div>
    );
  };

export default ServicePage