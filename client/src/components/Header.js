import React, { useState } from 'react';
import Settings from '../pages/Settings';
import Auth from '../utils/auth';



export default function Header() {
  const logout =(event) =>{
    event.preventDefault();
    Auth.logout()
    window.location.href='/'
  }
  return (
    <>

      <nav className="white" role="navigation">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><img src="../images/logo100.jpg" height="63px" alt="logo"></img></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {Auth.loggedIn() ? (<li onClick={logout}><a>Logout</a></li>) :(<li><a href='/login'>Login</a></li>)}
            {Auth.loggedIn() ? (<li><a href="/user">Profile</a></li>) : (<li><a href="/">Profile</a></li>)}
            {Auth.loggedIn() ? (<li><a href="/daily">Daily Question</a></li>) : (<li><a href="/">Daily Question</a></li>)}
            {Auth.loggedIn() ? (<li><a href='/recap'>Monthly Recap</a></li>) : (<li><a href='/'>Monthly Recap</a></li>)}
            {Auth.loggedIn() ? (<li><a href='/settings'>Change Preferences</a></li>) : (<li><a href='/'>Change Preferences</a></li>)}
          </ul>
        </div>
      </nav>
    </>
  )
}