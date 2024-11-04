import React from "react"; 
import './css/header.css'; 
import user from '../assets/user.jpeg'; 

const Header = ({ onToggleMenu }) => { 
  return (
    <div className="header-container"> 
      <div className="header-left"> 
        <button className="hamburger-button" onClick={onToggleMenu}> 
          ☰ 
        </button>
      </div>
      <div className="header-center"> 
        <span>Capitalis</span> 
      </div>
      <div className="header-right"> 
        <img src={user} alt="user" /> 
      </div>
    </div>
  );
}

export default Header; 
