import React, { useState } from "react";
import { UPDATE_SETTINGS } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Settings() {
  const [settingsForm, setSettingsForm] = useState({
    music: false,
    meals: false,
    substanceUse: false,
    meditation: false,
    exercise: false,
    therapy: false,
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setSettingsForm({ ...settingsForm, [name]: checked });
    console.log(settingsForm);
  };

  const [updateSettings, { error, data }] = useMutation(UPDATE_SETTINGS);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateSettings({ variables: { input: { ...settingsForm } } });
      if (data) {
        window.location.href = '/user'
      }
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }
  const hStyle = {
    alignItems: "center",
  };

  const containerStyle = {
    flexWrap: "wrap",
  };

  const textStyle = {
    color: "black",
  };
  return (
    <div class="container" style={containerStyle}>
      <form>
        <div class="title">
          <h6 style={hStyle}>Select your preferred wellness activites to help you reach your goals today.</h6>
    
        </div>
        <div class="switch">
          <label>
            <h5 style = {textStyle}>Music</h5>
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
            <h5 style = {textStyle}>Meals</h5>
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
            <h5 style = {textStyle}>Sobriety Calculator</h5>
            No
            <input
              type="checkbox"
              onChange={handleInputChange}
              name="substanceUse"
              checked={settingsForm.substanceUse}
            ></input>
            <span class="lever"></span>
            Yes
          </label>
        </div>
        <div class="switch">
          <label>
            <h5 style = {textStyle}>Meditation</h5>
            No
            <input type="checkbox" onChange={handleInputChange}
              name="meditation" checked={settingsForm.meditation}></input>
            <span class="lever"></span>
            Yes
          </label>
        </div>
        <div class="switch">
          <label>
            <h5 style = {textStyle}>Exercise</h5>
            No
            <input type="checkbox" onChange={handleInputChange}
              name="exercise" checked={settingsForm.exercise}></input>
            <span class="lever"></span>
            Yes
          </label>
        </div>
        <div class="switch">
          <label>
            <h5 style = {textStyle}>Therapy</h5>
            No
            <input type="checkbox" onChange={handleInputChange}
              name="therapy" checked={settingsForm.therapy}></input>
            <span class="lever"></span>
            Yes
          </label>
        </div>  
        <br></br>
          <div>
            <a className="waves-effect waves-light btn-small" onClick={handleFormSubmit} href="/user">Submit</a>
          </div>
          <br></br>
      </form>
    </div>
  );
}
