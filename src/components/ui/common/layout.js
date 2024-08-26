import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout-conatiner'>
      <div className="layout">
        <div className='layout-navbar'>
          <Navbar />
        </div>
        <div className="layout-content">
          {children}
        </div>
      </div>

      <div className='layout-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;