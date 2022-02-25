import React from 'react';
import useFetch from 'react-fetch-hook';


function Music() {

  return (

    <div>
      <div class="col s6 m6">
        <div class="card">
          <div class="card-image">
            <img src="./images/music.jpeg"></img>
              <span class="card-title">Music</span>
          </div>
          <div class="card-content">
            <p class="black-text"> Music can calm the mind and soul</p>
          </div>
          <div class="card-action">
            <a href="https://accounts.spotify.com/en/login">Spotify</a>
            <a href="https://music.apple.com/login">Apple Music</a>
          </div>
        </div>
      </div>
    </div>

  )
}