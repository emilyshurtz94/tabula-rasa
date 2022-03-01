import React from "react";
import Quote from "../components/Quote";


function Home() {

  return (
    <div>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">

          <div className="container">
         
            <h2 className="header center grey-text text-lighten-2">Tabula Rasa</h2>
            <h3 className="header center grey-text text-lighten-2">Each day is your own clean slate.  <br></br>
            <br></br></h3>
          
            <div className="row center"> 
              <a href="/login" className="waves-effect waves-light btn-large">Login</a>
              <a href="/signup"className="waves-effect waves-light btn-large">Signup</a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row center"><Quote/></div>
          </div>


          <div className="row">
              <div className="col s4 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="large material-icons">favorite_border</i></h2>
                  <h4 className="center">Wellness</h4>
                  <p className="light">Tabula Rasa is more than just physical health. Take a wholistic approach to tracking your mental wellness by combining your favorite music, new recipes and workout ideas.</p>
                </div>
            </div>

            <div className="col s4 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="large material-icons">face</i></h2>
                <h4 className="center">Personalized</h4>
                <p className="light">Set your own preferences daily to help keep a clear, focused mind. Do you want reminders to meditate? Drink water? Kicking habits? We'll help you track your personal goals. </p>
              </div>
            </div>

            <div className="col s4 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="large material-icons">timeline</i></h2>
                <h4 className="center">Reflect</h4>
                <p className="light">Take note of your daily goals. At the end of each month, check your progress and reflect. Work toward your daily goal and remember each day is a clean slate, Tabula Rasa.</p>
              </div>
            </div>
            <div className="parallax"><img src="./images/gradient-blue.jpg" alt="calming blue green colors"></img></div>
           
          </div>

        </div>
      </div>
    </div>

  );
}

export default Home;
