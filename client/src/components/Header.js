import React from 'react';
import Settings from '../pages/Settings'
import $ from 'jquery';

export default function Header() {
  (function($){
    $(function(){
      $(".dropdown-trigger").dropdown();
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    })
  })($);

  
    return (
      <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Tabula Rasa</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Logout</a></li>
          <li><a href="#">Notes</a></li>
          <li><a href="#">To Dos</a></li>
          <li><a href="#">Monthly Recap</a></li>
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#">Music</a></li>
          <li><a href="#">Workouts</a></li>
          <li><a href="#">Meditation</a></li>
          <li><a href="#">Meals</a></li>
          <li><a href="#">Therapy</a></li>
          <li><a href="#">Substance Usage</a></li>
          <li><a href= {Settings}>Change Preferences</a></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
          <li><a href="#">Logout</a></li>
          <li><a href="#">Notes</a></li>
          <li><a href="#">To Dos</a></li>
          <li><a href="#">Monthly Recap</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Workouts</a></li>
          <li><a href="#">Meditation</a></li>
          <li><a href="#">Meals</a></li>
          <li><a href="#">Therapy</a></li>
          <li><a href="#">Substance Usage</a></li>
          <li><a href={Settings}>Change Preferences</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
)}