import React from 'react'
import './styles/NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
        <h1 className="header">snap</h1>

        <div className="option-nav">
          <p>Features</p>
            <div className="option-nav-list transition">
              <p className="listed-items transition">Free trial</p>
              <p className="listed-items transition">Collaboration</p>
              <p className="listed-items transition">Networking</p>
            </div>
        </div>

        <div className="option-nav">
          <p>Company</p>
            <div className="option-nav-list transition">
              <p className="listed-items transition">Raviga</p>
              <p className="listed-items transition">Pied Piper</p>
              <p className="listed-items transition">Hooli</p>
            </div>
        </div>
        <p className="nav">Careers</p>
        <p className="nav">About</p>
    </div>
  )
}

export default NavBar;