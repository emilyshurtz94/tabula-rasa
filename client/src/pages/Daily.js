import React, { useState } from "react";
import { ADD_FORM } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Daily() {
  const [dailyForm, setDailyForm] = useState({
    // feeling: false,
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setDailyForm({ ...dailyForm, [name]: checked });
  };

  const [addDailyForm, { error, data }] = useMutation(ADD_FORM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addDailyForm({
        variables: { input: { ...dailyForm } },
      });
      if (data) {
        window.location.href = "/user";
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container ">
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br></br>
            <h1 className="header center grey-text text-lighten-2">
              How are you today?
            </h1>
            <div className="col">
              <h5 className="header col s12 light">
                Pick the emoji that fits the best with how you're feeling today.
              </h5>
              <form action="#">
                <p>
                  <label>
                    <input
                      name="upset"
                      type="checkbox"
                      value="1"
                      checked={dailyForm.feeling}
                      onChange={handleInputChange}
                    />
                    <span>
                      <i className="material-icons">mood_bad</i> Upset
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="mad"
                      type="checkbox"
                      value="2"
                      checked={dailyForm.feeling}
                      onChange={handleInputChange}
                    />
                    <span>
                      <i className="material-icons">
                        sentiment_very_dissatisfied
                      </i>{" "}
                      Mad
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="sad"
                      type="checkbox"
                      value="3"
                      checked={dailyForm.feeling}
                      onChange={handleInputChange}
                    />
                    <span>
                      <i className="material-icons">sentiment_dissatisfied</i>{" "}
                      Sad
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="not_great"
                      type="checkbox"
                      value="4"
                      checked={dailyForm.feeling}
                      onChange={handleInputChange}
                    />
                    <span>
                      <i className="material-icons">sentiment_neutral</i> Not
                      Great
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="okay"
                      type="checkbox"
                      value="5"
                      checked={dailyForm.feeling}
                      onChange={handleInputChange}
                    />
                    <span>
                      <i className="material-icons">sentiment_satisfied</i> Okay
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="happy"
                      type="checkbox"
                      value="6"
                      checked={dailyForm.feeling}
                      onChange={handleInputChange}
                    />
                    <span>
                      <i className="material-icons">sentiment_very_satisfied</i>{" "}
                      Happy
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="excited"
                      type="checkbox"
                      value="7"
                      checked={dailyForm.feeling}
                      onChange={handleInputChange}
                    />
                    <span>
                      <i className="material-icons">mood</i> Excited
                    </span>
                  </label>
                </p>
              </form>
            </div>
            <div className="row center">
              <a
                id="daily-button"
                className="waves-effect waves-light btn-small"
                name="submit"
                onChange={handleFormSubmit}
                href="/user"
              >
                Submit
              </a>
            </div>
            <br></br>
            <div className="parallax">
              <img
                src="gradient-blue.jpg"
                alt="calming blue green colors"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
