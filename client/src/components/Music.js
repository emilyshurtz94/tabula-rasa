import React from 'react';

export default function Music() {

  return (

    <div>
      <div className="container">
        <div className="col s6 m6">
          <div className="card">
            <div className="card-image">
              <img src="../images/music.png" alt="waves-relaxation-music"></img>
              <span className="card-title"></span>
            </div>
            <div className="card-content">
              <p className="black-text"> Music can calm the mind and soul</p>
            </div>
            <div className="card-action">
              <a href="https://accounts.spotify.com/en/login">Spotify</a>
              <a href="https://music.apple.com/login">Apple Music</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}