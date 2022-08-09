import React from 'react';
import NavBar from './NavBar';
import Button from './Button';
import './styles/RemoteWork.css';

function RemoteWork() {
  return (
    <div className="container">
        <NavBar />
        <div className="content">
            <div className="text">
                <h1 id="header">Make <br />remote work</h1>
                <p className="inner-text">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
                <Button />
            </div>
        </div>
    </div>
  )
}

export default RemoteWork;