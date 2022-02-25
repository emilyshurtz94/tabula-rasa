import React from 'react';
import useFetch from 'react-fetch-hook';

export default function Music() {
  const { isLoading, error, data } = useFetch("https://zenquotes.io/api/random");
  const quoteData = data[0]
  const quote = quoteData.q
  const author = quoteData.a


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
            <a href="#">Spotify</a>
            <a href="#">Apple Music</a>
          </div>
        </div>
      </div>
    </div>
  )
}