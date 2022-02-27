import React, { useState } from 'react';
import Settings from '../pages/Settings';
import Home from '../pages/Home';
import User from '../pages/User';


export default function Header() {
  
  return (
    <>
      <nav className="white" role="navigation">
        <div className="nav-wrapper">
          <a href={Home} className="brand-logo"><img src="../images/logo100.jpg" alt="logo"></img></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href={Home}>Logout</a></li>
            <li><a href={User}>Profile</a></li>
            <li><a href={Settings}>Change Preferences</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}