import React from 'react';
import Recipes from './Recipes';

export default function Meals() {
  return (
    <div>
      <div className='container'>
        <div className="col s6 m6">
          <div className="card">
            <div className="card-image">
              <img src="../images/meals.jpeg" alt="different-plates-of-meals"></img>
              <span className="card-title">Meals</span>
            </div>
            <div className="card-content">
              <p className="black-text">Eating right will help give you energy</p>
            </div>
            <div className="card-action">
              <a href={Recipes}>Recipes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
