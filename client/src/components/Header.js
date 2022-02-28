import React, { useState } from 'react';
import Settings from '../pages/Settings';
import Auth from '../utils/auth';



export default function Header() {
  const logout =(event) =>{
    event.preventDefault();
    Auth.logout()
  }
  return (
    <>
    {console.log(Auth.loggedIn())}
      <nav className="white" role="navigation">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><img src="../images/logo100.jpg" alt="logo"></img></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {Auth.loggedIn() ? (<li onClick={logout}><a>Logout</a></li>) :(<li><a href='/login'>Login</a></li>)}
            <li><a href="/user">Profile</a></li>
            <li><a href='/settings'>Change Preferences</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}