import React from 'react';

export default function Settings (){


return (
    <div class="container" style="flex-wrap: wrap">
    <form>
      <div class="title">
        <h2 style="align-items:center;">Customize your Page</h2>
        <h3 style="align-items: center;">Select what you need to help you everyday</h3>
      </div>
      <div class="switch">
        <label>
          <h4>Music</h4>
          No
          <input type="checkbox">
          <span class="lever"></span>
          Yes
        </label>
      </div>
      <div class="switch">
        <label>
          <h4>Meals</h4>
          No
          <input type="checkbox">
          <span class="lever"></span>
          Yes
        </label>
      </div>
      <div class="switch">
        <label>
          <h4>Substance Use</h4>
          No
          <input type="checkbox">
          <span class="lever"></span>
          Yes
        </label>
      </div>
      <div class="switch">
        <label>
          <h4>Meditation</h4>
          No
          <input type="checkbox">
          <span class="lever"></span>
          Yes
        </label>
      </div>
      <div class="switch">
        <label>
          <h4>Exercise</h4>
          No
          <input type="checkbox">
          <span class="lever"></span>
          Yes
        </label>
        <label>
          <h4>Level of Exercise</h4>
        </label>
        <p>
          <label>
            <input type="checkbox" class="filled-in" />
            <span>Low</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" class="filled-in" />
            <span>Medium</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" class="filled-in" />
            <span>High</span>
          </label>
        </p>
      </div>
      <div class="switch">
        <label>
          <h4>Daily Reminders</h4>
          No
          <input type="checkbox">
          <span class="lever"></span>
          Yes
        </label>
        <p>
          <label>
            <input type="checkbox" class="filled-in" />
            <span>Drinking Water</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" class="filled-in" />
            <span>Meditate</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" class="filled-in" />
            <span>Workout</span>
          </label>
        </p>
      </div>
    </form>
  </div>
)}