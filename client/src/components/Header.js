import React from 'react';

export default function Nav() {
    // $(".dropdown-trigger").dropdown();

    return (
< div className = "nav-bar" >
    <ul id="dropdown1" class="dropdown-content">
    <li><a href="#">Logout</a></li>
    <li><a href="#">Notes</a></li>
    <li><a href="#">To Dos</a></li>
    <li><a href="#">Monthly Recap</a></li>
  </ul>

  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Tabula Rasa</a>
      <ul class="right hide-on-med-and-down">
      <li><a href="#">Music</a></li>
      <li><a href="#">Workouts</a></li>
      <li><a href="#">Meditation</a></li>
      <li><a href="#">Meals</a></li>
      <li><a href="#">Therapy</a></li>
      <li><a href="#">Substance Usage</a></li>>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
    </div>
  </nav>
  </div >
)}