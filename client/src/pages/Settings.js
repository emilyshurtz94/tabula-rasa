
import React, { useState } from "react";

export default function Settings() {
  const [settingsForm, setSettingsForm] = useState({
    music: false,
    meals: false,
    substanceUse: false,
    meditation: false,
    exercise: false,
    exerciseLevel: false,
    low: false,
    medium: false,
    high: false,
    dailyReminders: false,
    drinkWater: false,
    meditate: false,
    workout: false,
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setSettingsForm({ ...settingsForm, [name]: checked });
    console.log(settingsForm);
  };


  const hStyle = {
    alignItems: "center",
  };

  const containerStyle = {
    flexWrap: "wrap",
  };
  return (
    <div class="container" style={containerStyle}>
      <form>
        <div class="title">
          <h2 style={hStyle}>Customize your Page</h2>
          <h3 style={hStyle}>Select what you need to help you everyday</h3>
        </div>
        <div class="switch">
          <label>
            <h4>Music</h4>
            No
            <input
              type="checkbox"
              name="music"
              checked={settingsForm.music}
              onChange={handleInputChange}
            ></input>
            <span class="lever"></span>
            Yes
          </label>
        </div>
        <div class="switch">
          <label>
            <h4>Meals</h4>
            No
            <input
              type="checkbox"
              onChange={handleInputChange}
              name="meals"
              checked={settingsForm.meals}
            ></input>
            <span class="lever"></span>
            Yes
          </label>
        </div>
        <div class="switch">
          <label>
            <h4>Substance Use</h4>
            No
            <input
              type="checkbox"
              onChange={handleInputChange}
              name="substance use"
              checked={settingsForm.substanceUse}
            ></input>
            <span class="lever"></span>
            Yes
          </label>
        </div>
        <div class="switch">
          <label>
            <h4>Meditation</h4>
            No
            <input type="checkbox" onChange={handleInputChange}
              name="meditation" checked={settingsForm.meditation}></input>
            <span class="lever"></span>
            Yes
          </label>
        </div>
        <div class="switch">
          <label>
            <h4>Exercise</h4>
            No
            <input type="checkbox" onChange={handleInputChange}
              name="exercise" checked={settingsForm.exercise}></input>
            <span class="lever"></span>
            Yes
          </label>
          <label>
            <h4>Level of Exercise</h4>
          </label>
          <p>
            <label>
              <input
                type="checkbox"
                class="filled-in"
                onChange={handleInputChange}
              name="low"
                checked={settingsForm.low}
              />
              <span>Low</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                class="filled-in"
                onChange={handleInputChange}
              name="medium"
                checked={settingsForm.medium}
              />
              <span>Medium</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                class="filled-in"
                onChange={handleInputChange}
              name="high"
                checked={settingsForm.high}
              />
              <span>High</span>
            </label>
          </p>
        </div>
        <div class="switch">
          <label>
            <h4>Daily Reminders</h4>
            No
            <input
              type="checkbox"
              onChange={handleInputChange}
              name="daily reminders"
              checked={settingsForm.dailyReminders}
            ></input>
            <span class="lever"></span>
            Yes
          </label>
          <p>
            <label>
              <input
                type="checkbox"
                class="filled-in"
                onChange={handleInputChange}
              name="drink water"
                checked={settingsForm.drinkWater}
              />
              <span>Drinking Water</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                class="filled-in"
                onChange={handleInputChange}
              name="meditate"
                checked={settingsForm.meditate}
              />
              <span>Meditate</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                class="filled-in"
                onChange={handleInputChange}
              name="workout"
                checked={settingsForm.workout}
              />
              <span>Workout</span>
            </label>
          </p>
        </div>
      </form>
    </div>
  );
}
