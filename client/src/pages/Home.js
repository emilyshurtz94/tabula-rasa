import React from "react";
// import Quote from "../components/Quote";

function Home() {

  return (
    <div>
      <div class="row">
        <div class="parallax-container valign-wrapper">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
              <h5 class="center">Wellness</h5>
              <p class="light">Tabula Rasa is more than just physical health. Take a wholistic approach to tracking your mental wellness by combining your favorite music, new recipes and workout ideas.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">group</i></h2>
              <h5 class="center">Personalized</h5>
              <p class="light">Set your own preferences daily to help keep a clear, focused mind. Do you want reminders to meditate? Drink water? Kicking habits? We'll help you track your personal goals. </p>

            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
              <h5 class="center">Reflect</h5>
              <p class="light">Take note of your daily goals. At the end of each month, check your progress and reflect. Work toward your daily goal and remember each day is a clean slate, Tabula Rasa.</p>
            </div>
          </div>
          <div class="parallax"><img src="./images/gradient-blue.jpg" alt="calming blue green colors"></img></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
