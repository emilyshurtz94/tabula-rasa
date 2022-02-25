import React from 'react';
import useFetch from 'react-fetch-hook';


function Music() {

  return (
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Music</span>
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

export default Music