import React from "react";
import './home.css'
import '../style.css'
import liveStreamIcon from '../../assets/icons/play-button.png'

const HomePage = () => {

  return (
    <div className="home-container">
      <div className="home-content">

        <div className='section-header'>
            <div className="section-title">
                <img src={liveStreamIcon} className="section-title grow" alt="live-stream-icon"></img>
                <span>Live Streaming</span>
            </div>
        </div>

        <div className='content-section'>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
