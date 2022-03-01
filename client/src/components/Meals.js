import React from 'react';


export default function Meals() {
  return (
    <div>
      <div className='container'>
        <div className="col s6 m6">
          <div className="card">
            <div className="card-image">
              <img src="../images/recipies.png" alt="different-plates-of-meals"></img>
              <span className="card-title"></span>
            </div>
            <div className="card-content">
              <p className="black-text">Eating right will help give you energy</p>
            </div>
            <div className="card-action">
            <a href="https://www.epicurious.com/">Find a Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
