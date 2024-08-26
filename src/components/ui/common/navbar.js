
import React from 'react';
import './navbar.css';

const Navbar = () => {

  const items = [
    {
      "item": 'Live Stream',
      "ref": "/",
    },

    {
      "item": 'Services',
      "ref": "/services",
    },

    {
      "item": "Params",
      "ref": "/params",
    },

    {
      "item": 'Models',
      "ref": "/models",
    },

    {
      "item": 'Deploy',
      "ref": "/deploy",
    },

  ]
  return (
    <div className="navbar">
      <div className='navbar-header'>
        <h2>WASTEANT rt-CVision</h2>
      </div>
      <div className='navbar-content'>
        {items.map((item, index) => (
          <div className='navbar-item' key={index}>
            <a href={item.ref}>
              <span>{item.item}</span>
            </a>
          </div>
        ))}
      </div>


      {/* You can add more items here */}
    </div>
  );
};

export default Navbar;